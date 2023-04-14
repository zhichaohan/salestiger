class AccountLead < ApplicationRecord
  belongs_to :account
  belongs_to :lead
end
