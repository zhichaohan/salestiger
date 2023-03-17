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

t = a.team_members.find_or_create_by!(name: 'Nathan Reeves')
t.update(
  title: 'Account Executive',
  photo_url: 'https://admin.pixelstrap.com/enzo/assets/images/avtar/16.jpg',
  gmail: 'nathan@salestiger.io'
)

t = a.team_members.find_or_create_by!(name: 'Chris Hedum')
t.update(
  title: 'CEO',
  photo_url: 'https://media.licdn.com/dms/image/D5603AQFbiRPbSSUUyQ/profile-displayphoto-shrink_800_800/0/1668389157267?e=1684368000&v=beta&t=qa15SFnrNzjk8PfFs7YdGdc3tgV8S-fEU_y1321wpH4',
  facebook_url: 'https://www.facebook.com/christopher.hedum',
  twitter_url: 'asdfasdf',
  instagram_url: 'https://www.instagram.com/chrisplaysrugby',
  linkedin_url: 'https://www.linkedin.com/in/chris-h-67a649118/',
  gmail: 'chris@salestiger.io'
)
t.team_member_infos.find_or_create_by!(
  type: 'TeamMemberInfo::Education',
  label: 'Marketing / Student-Athlete',
  location: 'Oregon State University',
  start_date: Date.new(2011, 9, 1)
)
t.team_member_infos.find_or_create_by!(
  type: 'TeamMemberInfo::WorkExperience',
  label: 'Vice President of Sales',
  location: 'PatientPartner',
  start_date: Date.new(2012, 3, 1),
  end_date: Date.new(2023, 3, 1)
)
t.team_member_infos.find_or_create_by!(
  type: 'TeamMemberInfo::WorkExperience',
  label: 'Head of Sales',
  location: 'bttn.',
  start_date: Date.new(2021, 7, 1),
  end_date: Date.new(2012, 3, 1)
)
t.team_member_infos.find_or_create_by!(
  type: 'TeamMemberInfo::WorkExperience',
  label: 'Sr. Manager, Sales Development',
  location: 'GoSite',
  start_date: Date.new(2019, 8, 1),
  end_date: Date.new(2021, 7, 1)
)
