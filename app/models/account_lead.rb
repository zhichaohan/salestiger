class AccountLead < ApplicationRecord
  belongs_to :account
  belongs_to :lead

  belongs_to :last_sent_email, class_name: "Email", optional: true

  def sync_last_sent_email!
    account_team_members = self.account.team_members

    self.update!(last_sent_email: self.lead.emails.where(team_member: account_team_members).newest_first.first)
  end
end
