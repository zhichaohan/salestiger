FactoryBot.define do
  factory :auth_token do
    access_token { "MyString" }
    refresh_token { "MyString" }
    expires_at { "2023-03-22 15:04:46" }
    email { "MyString" }
  end
end
