class CreateAuthTokens < ActiveRecord::Migration[5.2]
  def change
    create_table :auth_tokens do |t|
      t.string :access_token
      t.string :refresh_token
      t.datetime :expires_at
      t.string :email

      t.timestamps
    end
  end
end
