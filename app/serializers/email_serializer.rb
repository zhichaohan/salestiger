class EmailSerializer < ActiveModel::Serializer
  attributes :id, :body_html, :subject, :recipient, :sent_at, :open_count, :last_opened_at, :snippet

  belongs_to :team_member
end
