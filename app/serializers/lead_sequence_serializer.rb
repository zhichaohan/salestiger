class LeadSequenceSerializer < ActiveModel::Serializer
  belongs_to :sequence
  belongs_to :team_member
end
