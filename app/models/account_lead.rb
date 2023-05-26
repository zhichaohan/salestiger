class AccountLead < ApplicationRecord
  belongs_to :account
  belongs_to :lead

  belongs_to :last_sent_email, class_name: "Email", optional: true
  has_many :account_lead_team_members

  around_update :log_status_change!
  before_save :calculate_score!

  scope :exclude_engaged_leads, -> { where(last_sent_email: nil) }
  scope :exclude_leads_with_email_across_accounts, -> { joins(:lead).where(leads: { global_email_count: 0 }) }
  scope :within_target_audience, ->(ta) { joins(lead: :company).where(ta.account_lead_scope_where_clause) }

  STATUSES = [
    'New Opportunities',
    'Engaged',
    'Meeting Set',
    'Meeting Attended',
    'MIA',
    'Redzone',
    'Future Prospects',
    'Unsubscribe',
    'Email Bounced'
  ]

  def sync_last_sent_email!
    account_team_members = self.account.team_members

    self.update!(last_sent_email: self.lead.emails.sent_or_received.where(team_member: account_team_members).newest_first.first)
  end

  def sync_email_counts!
    account_team_members = self.account.team_members
    account_emails = self.lead.emails.where(team_member: account_team_members)

    self.update!(
      sent_email_count: account_emails.sent.count,
      sent_email_open_count: account_emails.sent.sum(:open_count),
      received_email_count: account_emails.received.count
    )
  end

  def log_status_change!
    p_status_changes = []

    if self.status_changed?
      p_status_changes = self.status_change
    end

    yield

    if p_status_changes[0] != nil
      AccountLeadStatusChange.create!(
        account: self.account,
        lead: self.lead,
        previous_status: p_status_changes[0],
        new_status: p_status_changes[1]
      )
    end
  end

  def calculate_score!
    new_score = 0

    if sent_email_open_count > 0
      new_score = new_score + 1
    end

    if received_email_count > 0
      new_score = new_score + 2
    end

    if status == 'Future Prospects'
      new_score = new_score + 3
    end

    if self.account_lead_team_members.where(linkedin_status: ['connected', 'messaged awaiting response', 'engaged']).any?
      new_score = new_score + 5
    end

    if status == 'Meeting Set'
      new_score = new_score + 8
    end

    if status == 'Meeting Attended'
      new_score = new_score + 13
    end

    if status == 'Redzone'
      new_score = new_score + 21
    end

    self.score = new_score
  end

  def status_indicator
    AccountLeadStatusChange.status_indicator(self.status) if self.status.present?
  end

  def self.scores_for_sequence(sequence)
    sql = %{
      JOIN (
        SELECT sequence_department_scores.score + sequence_industry_scores.score + sequence_num_employees_scores.score AS score
          , sequence_department_scores.department
          , sequence_industry_scores.industry
          , sequence_num_employees_scores.min_num_employees
          , sequence_num_employees_scores.max_num_employees
        FROM sequence_department_scores
        JOIN sequence_industry_scores
          ON sequence_department_scores.sequence_id = sequence_industry_scores.sequence_id
        JOIN sequence_num_employees_scores
          ON sequence_department_scores.sequence_id = sequence_num_employees_scores.sequence_id
        WHERE sequence_department_scores.sequence_id = #{sequence.id}
      ) scores
        ON leads.departments LIKE '%' || scores.department || '%'
        AND companies.industry = scores.industry
        AND companies.num_employees BETWEEN scores.min_num_employees AND scores.max_num_employees
    }

    joins(lead: :company).joins(sql)
  end
end
