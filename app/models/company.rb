class Company < ApplicationRecord
  has_many :leads

  def process_merge_keys(text)
    str = text
    str = str.gsub("{{LEAD COMPANY NAME}}", self.name)

    str
  end

  def self.all_industries
    Rails.cache.fetch("all_company_industries", expires_in: 24.hours) do
      self.pluck("DISTINCT industry")
    end
  end
end
