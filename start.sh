bundle check || bundle install
bundle exec puma -C config/puma.rb -p 3337
