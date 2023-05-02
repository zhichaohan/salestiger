class AccountLeadStatusChange < ApplicationRecord
  belongs_to :account
  belongs_to :lead

  def to_log
    {
      id: self.id,
      type: "AccountLeadStatusChange",
      title: "Status Change",
      subtitle: "Sequence",
      description: "Status was changed from #{self.previous_status} to #{self.new_status}",
      statuses: [AccountLeadStatusChange.status_indicator(self.new_status)],
      can_edit: false,
      can_cancel: false,
      email_id: nil,
      datetime: self.created_at
    }
  end

  def self.status_indicator(status)
    return { type: 'danger', label: status } if status == 'Unsubscribe'

    if status == 'New Opportunities' || status == 'Future Prospects' || status == 'Engaged' || status == 'MIA'
      return { type: 'info', label: status }
    end

    { type: 'success', label: status }
  end
end
