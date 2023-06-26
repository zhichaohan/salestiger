class UserSerializer < ActiveModel::Serializer
  attributes :name, :created_at, :updated_at, :account_id, :super_user

  belongs_to :account, serializer: AccountSerializer

  def super_user
    object.super_user?
  end
end
