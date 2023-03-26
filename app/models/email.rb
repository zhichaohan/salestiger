class Email < ApplicationRecord
  belongs_to :team_member
  belongs_to :lead

  def final_recipient
    return self.recipient if ENV['ENABLE_SEND_EXTERNAL_EMAIL'] == 'true'

    "zhichao+lead-#{self.lead.uuid}@salestiger.io"
  end
end
