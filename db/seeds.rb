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

ta = a.target_audiences.find_or_create_by!(name: "Startup Executives")
ta.update!(
  titles: ['CEO', 'COO', 'VP of Sales', 'Head of Sales'],
  industry: 'SAAS',
  company_size: '1-50',
  location: 'San Diego'
)

p = a.products.find_or_create_by!(name: 'Cyber SDR')
p.update!(
  description: 'Cyber SDR sets meetings for you so that you spend more time selling and less time prospecting. An average sales team member spends 40% of his or her time on generating leads. We have created battle tested prospectiving and outreach sequences fully automated to get you the best opportunities'
)

w = a.workflows.find_or_create_by!(
  type: "Workflow::SaleProduct",
  name: "Selling Cyber SDR to startup executives and head of sales"
)
w.update(
  target_audience: a.target_audiences.find_by!(name: "Startup Executives"),
  product: a.products.find_by!(name: 'Cyber SDR'),
  motivation: "Cyber SDR will generate more meetings for you than the same investment into more sales personelle",
  active: true,
  num_leads: 1256,
  num_meetings: 20,
  pipeline_generated: 1750000,
  messages_sent: 2301
)
wtm = w.workflow_team_members.find_or_create_by!(
  team_member: a.team_members.find_by!(name: 'Nathan Reeves')
)
wtm.update!(
  num_leads: 230,
  num_meetings: 5,
  pipeline_generated: 250000,
  messages_sent: 804
)
wtm = w.workflow_team_members.find_or_create_by!(
  team_member: a.team_members.find_by!(name: 'Chris Hedum')
)
wtm.update!(
  num_leads: 1026,
  num_meetings: 15,
  pipeline_generated: 1500000,
  messages_sent: 1497
)
