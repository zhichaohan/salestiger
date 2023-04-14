class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.references :team_member, foreign_key: true, index: true, null: false
      t.references :lead, foreign_key: true, index: true, null: false
      t.string :subject
      t.text :body_html

      t.timestamps
    end
  end
end
