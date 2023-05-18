class LeadImports::RunWorker
  include Sidekiq::Worker

  sidekiq_options retry: false

  def perform(lead_import_id)
    lead_import = LeadImport.find_by(id: lead_import_id)
    return unless lead_import.present?
    # return if lead_import.status.present?

    lead_import.update!(status: 'in progress')
    account = lead_import.user.account

    success_count = 0
    error_count = 0
    duplicate_count = 0

    CSV.new(open(lead_import.csv_url), headers: :first_row).each do |line|
      begin
        apollo_id = line['Apollo Contact Id']

        company_name = line['Company']
        company = Company.find_by(name: company_name)
        if company.blank?
          company = Company.create!(
            name: line['Company'],
            num_employees: line['# Employees'],
            industry: line['Industry'],
            address: line['Company Address'],
            linkedin_url: line['Company Linkedin Url'],
            facebook_url: line['Facebook Url'],
            twitter_url: line['Twitter Url'],
            city: line["Company City"],
            state: line["Company State"],
            phone: line["Company Phone"],
            annual_revenue: line["Annual Revenue"],
            total_funding: line["Total Funding"],
            latest_funding: line["Latest Funding"],
            latest_funding_amount: line["Latest Funding Amount"],
            last_raised_at: line["Last Raised At"],
            website_url: line["Website"],
            keywords: line["Keywords"],
            seo_description: line["SEO Description"],
            technologies: line["Technologies"]
          )
        end

        if apollo_id.present?
          lead = Lead.find_by(apollo_id: apollo_id)

          if lead.blank?
            lead = Lead.create!(
              apollo_id: apollo_id,
              name: "#{line['First Name']} #{line['Last Name']}",
              title: line['Title'],
              company: company,
              seniority: line["Seniority"],
              departments: line["Departments"],
              phone: line["First Phone"],
              linkedin_url: line["Person Linkedin Url"],
              city: line["City"],
              state: line["State"],
              lead_import: lead_import,
              business_email: line["Email"]
            )

            al = account.account_leads.create!(lead: lead)

            success_count = success_count + 1
          else
            duplicate_count = duplicate_count + 1
          end
        end
      rescue => error
        error_count = error_count + 1
      end
    end

    lead_import.update!(
      status: 'finished',
      success_count: success_count,
      duplicate_count: duplicate_count,
      error_count: error_count
    )
    lead_import.notify_user!
  end
end
