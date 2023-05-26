class TargetAudience < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  def account_lead_scope_where_clause
    where_clauses = ["1 = 1"]

    if self.titles.present?
      where_clauses << "leads.title IN (#{self.titles.map { |t| "'#{t}'" }.join(',')})"
    end

    if self.industries.present?
      where_clauses << "companies.industry IN (#{self.industries.map { |i| "'#{i}'" }.join(',')})"
    end

    if self.min_company_size.present?
      where_clauses << "companies.num_employees > #{self.min_company_size}"
    end

    if self.max_company_size.present?
      where_clauses << "companies.num_employees < #{self.max_company_size}"
    end

    where_clauses.join(" AND ")
  end
end
