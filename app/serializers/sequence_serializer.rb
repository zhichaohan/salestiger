class SequenceSerializer < ActiveModel::Serializer
  attributes :name,
             :id,
             :slug

  belongs_to :workflow
  has_many :sequence_steps, serializer: SequenceStepSerializer
end
