class LinkedinSequenceSerializer < ActiveModel::Serializer
  attributes :name,
             :id,
             :slug,
             :show_path

  belongs_to :workflow
  has_many :linkedin_sequence_steps
end
