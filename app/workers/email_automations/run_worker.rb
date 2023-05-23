class EmailAutomations::RunWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(email_automation_id)
    email_automation = EmailAutomation.find_by(email_automation_id)
    return unless email_automation.present?

    account = email_automation.sequence.workflow.account

    account_leads = account.account_leads

    if email_automation.exclude_engaged_leads?
      account_leads = account_leads.exclude_engaged_leads
    end

    if email_automation.exclude_engaged_leads_across_accounts?
      account_leads = account_leads.exclude_engaged_leads_across_accounts(account.id)
    end
  end
end
