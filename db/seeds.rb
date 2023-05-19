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
  gmail: 'zhichao@salestiger.io'
)

t = a.team_members.find_or_create_by!(name: 'Zhichao Han')
t.update(
  title: 'Account Executive',
  photo_url: 'https://admin.pixelstrap.com/enzo/assets/images/avtar/16.jpg',
  gmail: 'zhichao.han.89@gmail.com'
)

t = a.team_members.find_or_create_by!(name: 'Zhichao Test')
t.update(
  title: 'Account Executive',
  photo_url: 'https://admin.pixelstrap.com/enzo/assets/images/avtar/16.jpg',
  gmail: 'zhichao@patientpartner.com'
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

c = Company.find_or_create_by!(name: 'OpenCV')
c.update!(
  num_employees: 21,
  industry: 'Nonprofit Organization Management',
  logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/64143f8913198d00011e840f/picture',
  website_url: 'https://opencv.org/',
  linkedin_url: 'https://www.linkedin.com/company/opencv/',
  facebook_url: 'https://www.facebook.com/opencvlibrary',
  twitter_url: 'https://twitter.com/opencvlibrary'
)
l = c.leads.find_or_create_by!(name: 'Satya Mallick')
l.update!(
  title: 'Chief Executive Officer',
  business_email: 'spmallick@opencv.ai',
  personal_email: 'spmallick@gmail.com',
  location: 'San Diego, California',
  linkedin_url: 'https://www.linkedin.com/in/satyamallick/',
  twitter_url: 'https://twitter.com/learnopencv'
)
w = a.workflows.find_by!(
  type: "Workflow::SaleProduct",
  name: "Selling Cyber SDR to startup executives and head of sales"
)
w.workflow_leads.find_or_create_by!(lead: l)

c = Company.find_or_create_by!(name: 'Acenda')
c.update!(
  num_employees: 24,
  industry: 'Information Technology & Services',
  logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/640b1aa76eafb70001cbc100/picture',
  website_url: 'https://www.acenda.com/',
  linkedin_url: 'https://www.linkedin.com/company/acenda/',
  facebook_url: 'https://www.facebook.com/acendainc',
  twitter_url: 'https://twitter.com/Acenda_Official'
)
l = c.leads.find_or_create_by!(name: 'Gavin M')
l.update!(
  title: 'Chief Executive Officer',
  business_email: 'gavinm@acenda.com',
  location: 'San Diego, California',
  linkedin_url: 'https://www.linkedin.com/in/grmandel/',
  phone: '+1(866) 293-2151'
)
w.workflow_leads.find_or_create_by!(lead: l)

c = Company.find_or_create_by!(name: 'PsychArmor')
c.update!(
  num_employees: 35,
  industry: 'Nonprofit Organization Management',
  logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/640c8460ad3e0000010d70f1/picture',
  website_url: 'https://psycharmor.org/',
  linkedin_url: 'https://www.linkedin.com/company/psycharmor/',
  twitter_url: 'https://twitter.com/PsychArmor'
)
l = c.leads.find_or_create_by!(name: 'Tina Atherall')
l.update!(
  title: 'Chief Executive Officer',
  business_email: 'tatherall@psycharmor.org',
  location: 'San Diego, California',
  linkedin_url: 'https://www.linkedin.com/in/tina-atherall/',
  phone: '+1-858-755-3006'
)
w.workflow_leads.find_or_create_by!(lead: l)

c = Company.find_or_create_by!(name: 'Sales Tiger')
c.update!(
  num_employees: 2,
  industry: 'Sales Enablement',
  logo_url: 'https://salestiger-assets.s3.us-west-2.amazonaws.com/favicons/android-chrome-192x192.png',
  website_url: 'https://www.salestiger.io/'
)
l = c.leads.find_or_create_by!(name: 'Zhichao Han')
l.update!(
  title: 'Chief Technology Officer',
  business_email: 'zhichao.han.89@gmail.com',
  location: 'San Diego, California',
  linkedin_url: 'https://www.linkedin.com/in/zhichao-han-49366315/',
  phone: '+1-703-220-3824'
)
w.workflow_leads.find_or_create_by!(lead: l)

s = w.sequences.find_or_create_by!(name: 'Sales Method: SPIN')
s.update(
  active: true
)


Account.setup_new!(
  'Volt Wave',
  'https://www.voltwave.io/hosted/images/b8/34399f44bf44ebb0a586e4c4cc3825/Screen-Shot-2023-04-10-at-4.16.39-PM.png',
  [
    { name: 'Zhichao Han', email: 'zhichao+voltwave@salestiger.io', password: 'zhichao+voltwave@salestiger.io' },
    { name: 'Chris Hedum', email: 'chris+voltwave@salestiger.io', password: 'chris+voltwave@salestiger.io' },
    { name: 'Brooke Brennan', email: 'brooke@voltwave.io', password: 'brooke@voltwave.io' },
  ],
  [
    {
      name: 'Brooke Brennan',
      title: 'CEO',
      photo_url: 'https://www.voltwave.io/hosted/images/9c/fc8187cea9440a96b6d7ed57b4adcf/Screen-Shot-2023-04-10-at-11.37.50-AM.png',
      gmail: 'brooke@voltwave.io',
      linkedin_url: 'https://www.linkedin.com/in/brookebrennansales/'
    }
  ],
  [{
    name: 'Initial Workflow',
    motivation: 'Specializing in one service for growing B2B tech companies is the key to our success, allowing us to provide unmatched expertise and results.',
    target_audience: {
      name: 'B2B SAAS',
      titles: ['CEO', 'CRO', 'VP of Sales', 'Head of Sales', 'VP Business Development/Head of Business Development'],
      industry: 'SAAS',
      company_size: '5-100',
      location: 'United States'
    },
    product: {
      name: 'Appointment Setter',
      description: 'Our agency helps growing B2B tech companies achieve their revenue goals by providing expert appointment setting services. We understand that in today''s competitive market, it''s not enough to have a great product or service - you need to get as many at-bats with the right people at the right time. That''s where we come in.',
      average_selling_price: '10000'
    }
  }],
  'https://www.voltwave.io/'
)
