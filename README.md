# RightDevice repo setup instructions

This tutorial covers how to set up a Rails/React app for User authentication using Devise. It will cover the following tasks:

#### Environment

Ruby Version: 2.6.3

Rails Version: 5.2.3

Node Version: 12.16.0

Yarn Version: 1.22.4

#### Local set up instructions

  - `git clone https://github.com/rightdevice-inc/patientpartner.git`
  - `cd rightdevice`
  - `yarn install`
  - `rails db:migrate`
  - `rails db:seed`
  - `cd client`
  - `yarn install`
  - `cd ..`
  - `rails s`
  - (in new terminal) `./bin/webpack-dev-server`

You should now be able to navigate the site at localhost:3000
