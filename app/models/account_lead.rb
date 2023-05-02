class AccountLead < ApplicationRecord
  belongs_to :account
  belongs_to :lead

  belongs_to :last_sent_email, class_name: "Email", optional: true

  around_update :log_status_change!

  STATUSES = [
    'New Opportunities',
    'Engaged',
    'Meeting Set',
    'Meeting Attended',
    'MIA',
    'Redzone',
    'Future Prospects',
    'Unsubscribe'
  ]

  def sync_last_sent_email!
    account_team_members = self.account.team_members

    self.update!(last_sent_email: self.lead.emails.sent.where(team_member: account_team_members).newest_first.first)
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
