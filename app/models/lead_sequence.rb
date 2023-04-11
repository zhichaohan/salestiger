class LeadSequence < ApplicationRecord
  belongs_to :lead
  belongs_to :sequence
  belongs_to :team_member
end
