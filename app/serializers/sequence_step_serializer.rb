class SequenceStepSerializer < ActiveModel::Serializer
  attributes :id,
             :hours_delay,
             :email_subject,
             :email_template,
             :sanitized_email_template
end
