class AccountSerializer < ActiveModel::Serializer
  attributes :name, :need_first_workflow, :logo_url

  def need_first_workflow
    object.need_first_workflow?
  end
end
