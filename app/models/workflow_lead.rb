class WorkflowLead < ApplicationRecord
  belongs_to :workflow
  belongs_to :lead
end
