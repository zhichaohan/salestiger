# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = Account.find_or_create_by(name: 'Sales Tiger')
a.update!(logo_url: 'https://salestiger-assets.s3.us-west-2.amazonaws.com/images/logonobg.png')
u = a.users.find_by(name: 'Zhichao')
if u.blank?
  u = a.users.create!(name: 'Zhichao', email: 'zhichao@salestiger.io', password: 'asdfasdf')
end
u = a.users.find_by(name: 'Chris')
if u.blank?
  u = a.users.create!(name: 'Chris', email: 'chris@salestiger.io', password: 'asdfasdf')
end
