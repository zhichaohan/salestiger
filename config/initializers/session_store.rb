Rails.application.config.session_store :cookie_store, key: '_app_session', domain: ENV['SESSION_STORE_DOMAIN']
