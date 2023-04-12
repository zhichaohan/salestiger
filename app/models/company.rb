class Company < ApplicationRecord
  has_many :leads

  def process_merge_keys(text)
    str = text
    str = str.gsub("{{LEAD COMPANY NAME}}", self.name)

    str
  end
end
