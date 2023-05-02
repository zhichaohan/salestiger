class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:app]
  before_action :set_seo, only: [:home]

  def home
    gon.current_user = current_user
    gon.authenticity_token = form_authenticity_token
    gon.s3_bucket_name = ENV['S3_BUCKET_NAME']
    gon.s3_store_dir = ENV['S3_STORE_DIR']
    gon.s3_region = ENV['S3_REGION']
    gon.s3_key = ENV['S3_KEY']
    gon.s3_secret = ENV['S3_SECRET']
    gon.lead_statuses = AccountLead::STATUSES
    if current_user.present?
      render layout: "dashboard"
    else
      render layout: "application"
    end
  end

  def app
  end

  def set_seo
    set_meta_tags title: "We book the meetings. You close the deals.",
                  site: 'Sales Tiger',
                  description: "Spend time on what's important - meeting with highly qualified leads and converting them into loyal customers. We've combined decades of sales expertise with powerful-AI to save you time and help you close more deals.",
                  keywords: "Sales Automation, Lead Generation, Get Meetings, Sales Training",
                  twitter: {
                    card: "summary",
                    title: "We book the meetings. You close the deals.",
                    description: "Spend time on what's important - meeting with highly qualified leads and converting them into loyal customers. We've combined decades of sales expertise with powerful-AI to save you time and help you close more deals.",
                    image: "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/Group-6945-1.png"
                  },
                  og: {
                    title: "We book the meetings. You close the deals.",
                    description: "Spend time on what's important - meeting with highly qualified leads and converting them into loyal customers. We've combined decades of sales expertise with powerful-AI to save you time and help you close more deals.",
                    type: 'website',
                    url: request.original_url,
                    image: "https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/Group-6945-1.png"
                  }
  end
end
