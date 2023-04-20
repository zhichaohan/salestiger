class LeadImport < ApplicationRecord
  belongs_to :user
  has_many :leads

  include Routable

  def run!
    LeadImports::RunWorker.perform_async(self.id)
  end

  def show_url
    "#{root_url}#{show_path[1..-1]}"
  end

  def show_path
    "/lead_imports/#{uuid}"
  end

  def notify_user!
    LeadImportMailer.notify_complete(self).deliver_now!
  end
end
