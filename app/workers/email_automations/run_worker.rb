class EmailAutomations::RunWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(email_automation_id)
    email_automation = EmailAutomation.find_by(id: email_automation_id)
    return unless email_automation.present?

    account = email_automation.sequence.workflow.account

    account_leads = account.account_leads

    if email_automation.exclude_engaged_leads?
      account_leads = account_leads.exclude_engaged_leads
    end

    if email_automation.exclude_leads_with_email_across_accounts?
      account_leads = account_leads.exclude_leads_with_email_across_accounts
    end

    target_audience = email_automation.sequence.workflow.target_audience

    if target_audience.present?
      account_leads = account_leads.within_target_audience(target_audience)
    end

    sequence = email_automation.sequence

    best_leads = account_leads.scores_for_sequence(sequence)
                              .order(score: :desc)
                              .take(email_automation.num_qualified_leads)


    random_leads = account_leads.scores_for_sequence(sequence)
                                .where.not(id: best_leads.pluck(:id))
                                .randomize
                                .take(email_automation.num_random_leads)


    [best_leads, random_leads]
  end
end
