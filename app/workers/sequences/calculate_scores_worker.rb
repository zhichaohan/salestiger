class Sequences::CalculateScoresWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(sequence_id)
    sequence = Sequence.find_by(id: sequence_id)
    return unless sequence.present?

    account_id = sequence.workflow.account_id

    Company.all_industries.each do |industry|
      avg_score = sequence.lead_sequences.for_industry(industry).with_account_leads(account_id).average(:score)

      sequence_industry = sequence.sequence_industry_scores.find_or_create_by!(industry: industry)
      sequence_industry.update!(score: avg_score || 0)
    end

    Lead.all_departments.each do |department|
      avg_score = sequence.lead_sequences.for_department(department).with_account_leads(account_id).average(:score)

      sequence_department = sequence.sequence_department_scores.find_or_create_by!(department: department)
      sequence_department.update!(score: avg_score || 0)
    end

    Company::NUM_EMPLOYEE_BRACKETS.each do |num_employee_bracket|
      avg_score = sequence.lead_sequences.with_employee_size(num_employee_bracket[0], num_employee_bracket[1]).with_account_leads(account_id).average(:score)

      sequence_num_employee_score = sequence.sequence_num_employees_scores.find_or_create_by!(
        min_num_employees: num_employee_bracket[0],
        max_num_employees: num_employee_bracket[1]
      )
      sequence_num_employee_score.update!(score: avg_score || 0)
    end
  end
end
