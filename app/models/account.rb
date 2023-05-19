class Account < ApplicationRecord
  extend FriendlyId

  friendly_id :name, use: :slugged

  has_many :users
  has_many :team_members
  has_many :target_audiences
  has_many :products
  has_many :workflows
  has_many :account_leads
  has_many :sequences, through: :workflows
  has_many :linkedin_sequences, through: :workflows
  has_many :lead_sequences, through: :sequences
  has_many :lead_sequence_steps, through: :lead_sequences
  has_many :workflow_team_members, through: :workflows

  def sync_account_leads_last_sent_email!
    self.team_members.each do |team_member|
      distinct_lead_ids = team_member.emails.pluck(:lead_id).uniq

      distinct_lead_ids.each do |lead_id|
        account_lead = self.account_leads.find_or_create_by!(account: self, lead_id: lead_id)

        account_lead.sync_last_sent_email!
      end
    end
  end

  def self.setup_new!(
    account_name,
    logo_url,
    user_name_emails,
    team_member_infos,
    workflow_infos,
    website_url
  )
    a = Account.find_or_create_by(name: account_name)
    a.update!(logo_url: logo_url)

    user_name_emails.each do |info|
      u = a.users.find_by(name: info[:name])
      if u.blank?
        u = a.users.create!(name: info[:name], email: info[:email], password: info[:password])
      end
    end

    team_member_infos.each do |info|
      t = a.team_members.find_or_create_by!(name: info[:name])
      t.update(
        title: info[:title],
        photo_url: info[:photo_url],
        facebook_url: info[:facebook_url],
        twitter_url: info[:twitter_url],
        instagram_url: info[:instagram_url],
        linkedin_url: info[:linkedin_url],
        gmail: info[:gmail],
      )
    end
    a.reload

    workflow_infos.each do |info|
      ta = a.target_audiences.find_or_create_by!(name: info[:target_audience][:name])
      ta.update!(
        titles: info[:target_audience][:titles],
        industry: info[:target_audience][:industry],
        company_size: info[:target_audience][:company_size],
        location: info[:target_audience][:location]
      )

      p = a.products.find_or_create_by!(name: info[:product][:name])
      p.update!(
        description: info[:product][:description],
        average_selling_price: info[:product][:average_selling_price]
      )

      w = a.workflows.find_or_create_by!(
        type: "Workflow::SaleProduct",
        name: info[:name]
      )

      w.update(
        target_audience: ta,
        product: p,
        motivation: info[:motivation],
        active: true,
        num_leads: 1256,
        num_meetings: 20,
        pipeline_generated: 1750000,
        messages_sent: 2301
      )

      a.team_members.each do |team_member|
        wtm = w.workflow_team_members.find_or_create_by!(
          team_member: team_member
        )
        wtm.update!(
          num_leads: 230,
          num_meetings: 5,
          pipeline_generated: 250000,
          messages_sent: 804
        )
      end
    end

    c = Company.find_or_create_by!(name: account_name)
    c.update!(
      num_employees: 1,
      industry: 'Sales Enablement',
      logo_url: logo_url,
      website_url: website_url
    )
    team_member_infos.each do |info|
      l = c.leads.find_or_create_by!(name: info[:name])

      l.update!(
        title: info[:title],
        business_email: info[:gmail],
        linkedin_url: info[:linkedin_url],
        phone: '+1-703-220-3824'
      )

      al = a.account_leads.find_or_create_by!(lead: l)
      al.update!(score: 10)
    end

    a
  end

  def update_statistics!
    self.workflow_team_members.each do |wtm|
      wtm.update_statistics!
    end

    self.workflows.each do |w|
      w.update_statistics!
    end
  end
end
