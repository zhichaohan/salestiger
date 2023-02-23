Rails.application.configure do
  if ENV["SENDGRID_API_KEY"].present?
    config.action_mailer.smtp_settings = {
      address: "smtp.sendgrid.net",
      port: 587,
      authentication: :plain,
      user_name: "apikey",
      password: ENV["SENDGRID_API_KEY"],
      domain: "salestiger.io",
      enable_starttls_auto: true
    }
  end
end
