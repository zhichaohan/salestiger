class AccountLead < ApplicationRecord
  belongs_to :account
  belongs_to :lead

  belongs_to :last_sent_email, class_name: "Email", optional: true
  has_many :account_lead_team_members

  around_update :log_status_change!

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

  def status_indicator
    AccountLeadStatusChange.status_indicator(self.status) if self.status.present?
  end
end
