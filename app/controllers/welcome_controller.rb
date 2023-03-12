class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:app]
  before_action :set_seo, only: [:home]

  def home
    gon.current_user = current_user
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
                    image: "https://spyrowptheme1.wpengine.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/Group-6945-1.png"
                  },
                  og: {
                    title: "We book the meetings. You close the deals.",
                    description: "Spend time on what's important - meeting with highly qualified leads and converting them into loyal customers. We've combined decades of sales expertise with powerful-AI to save you time and help you close more deals.",
                    type: 'website',
                    url: request.original_url,
                    image: "https://spyrowptheme1.wpengine.com/saas-clickthrough-new/wp-content/uploads/sites/17/2020/12/Group-6945-1.png"
                  }
  end
end
