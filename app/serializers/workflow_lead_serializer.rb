class WorkflowLeadSerializer < ActiveModel::Serializer
  belongs_to :lead, serializer: LeadSerializer
end
