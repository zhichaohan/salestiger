class Company < ApplicationRecord
  has_many :leads

  NUM_EMPLOYEE_BRACKETS = [
    [1, 10],
    [11, 20],
    [21, 50],
    [51, 100],
    [101, 200],
    [201, 500],
    [501, 1000],
    [1001, 2000],
    [2001, 5000],
    [5001, 10000],
    [10001, 100000]
  ]

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
