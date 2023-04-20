class LeadImportSerializer < ActiveModel::Serializer
  attributes :id, :uuid, :csv_url, :status, :show_path, :success_count, :error_count, :created_at_readable

  has_many :leads, serializer: LeadSerializer
end
