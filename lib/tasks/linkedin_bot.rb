return

require 'puppeteer-ruby'

def connect(page, name, linkedin_url)
  # name = "Chris H."
  # linkedin_url = 'https://www.linkedin.com/in/chris-h-67a649118/'
  page.goto(linkedin_url, wait_until: 'domcontentloaded')

  sleep(2)
  connect_button_selector = '.pvs-profile-actions button[aria-label="Invite ' + name + ' to connect"]'
  connect_button = page.query_selector(connect_button_selector)
  connect_button.click
  sleep(2)
  add_a_note_button = page.query_selector('button[aria-label="Add a note"]')
  add_a_note_button.click
  sleep(2)
  custom_message_input = page.query_selector('textarea#custom-message')
  custom_message_input.click
  page.keyboard.type_text("Hi #{name} I would like to connect with you")
  send_now_button = page.query_selector('button[aria-label="Send now"]')
  send_now_button.click
  sleep(2)
end

def message(page, first_name, linkedin_url, s)
  # first_name = "Chris"
  # linkedin_url = 'https://www.linkedin.com/in/chris-h-67a649118/'
  page.goto(linkedin_url, wait_until: 'domcontentloaded')

  sleep(10)
  message_button_selector = '.pvs-profile-actions button[aria-label="Message ' + first_name + '"]'
  message_button = page.query_selector(message_button_selector)
  message_button.click

  sleep(2)
  page.keyboard.type_text(s)
  send_button = page.query_selector(".msg-form__send-button")
  send_button.click
end

Puppeteer.launch(headless: false, slow_mo: 50, args: ['--window-size=1280,800']) do |browser|
  page = browser.new_page
  page.viewport = Puppeteer::Viewport.new(width: 1280, height: 800)

  # login
  page.goto("https://www.linkedin.com/home", wait_until: 'domcontentloaded')
  form = page.query_selector('form[data-id="sign-in-form"]')
  email_input = form.query_selector("input#session_key")
  email_input.click
  page.keyboard.type_text("zhichao.han.89@gmail.com")
  password_input = form.query_selector("input#session_password")
  password_input.click
  page.keyboard.type_text("SalesTiger123!")
  submit_button = form.query_selector('button[data-id="sign-in-form__submit-btn"]')
  page.wait_for_navigation do
    submit_button.click
  end

  # connect
  # connect(page, 'Natalie Chanfreau', 'https://www.linkedin.com/in/natalie-chanfreau-b6519954/')

  # message
  message(page, 'Chris', 'https://www.linkedin.com/in/chris-h-67a649118/', "Hi Chris how are you doing today")
end
