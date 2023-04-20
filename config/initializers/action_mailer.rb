Rails.application.configure do
  if ENV["SENDGRID_USERNAME"].present?
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.perform_deliveries = true
    config.action_mailer.smtp_settings = {
      address: "smtp.sendgrid.net",
      port: 587,
      authentication: :plain,
      user_name: ENV["SENDGRID_USERNAME"],
      password: ENV["SENDGRID_PASSWORD"],
      domain: "salestiger.io",
      enable_starttls_auto: true
    }
  end
end
