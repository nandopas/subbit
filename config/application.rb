require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Subbit
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    #https://stackoverflow.com/questions/6118779/how-to-change-default-timezone-for-active-record-in-rails
    config.time_zone = 'Eastern Time (US & Canada)'
 	config.active_record.default_timezone = :local # Or :utc

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
