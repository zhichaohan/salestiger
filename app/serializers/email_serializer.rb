class EmailSerializer < ActiveModel::Serializer
  attributes :id, :body_html, :subject, :recipient

  belongs_to :team_member
end
