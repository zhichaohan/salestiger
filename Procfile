web: bin/rails server -p $PORT -e $RAILS_ENV
sidekiq: bundle exec sidekiq -c 2
clock: bundle exec clockwork clock.rb
release: rake db:migrate
