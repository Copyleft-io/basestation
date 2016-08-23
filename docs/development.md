# Development

This is the running log for all the configuration implemented for Base Station.

This will outline all the development steps taken to create and configure the application stack.

This is everything that we've done to get the application up and running.


### CHECK DEPENDENCIES


* Check Ruby Version (>= 2.3.x)

```
ruby --version
ruby 2.3.0p0 (2015-12-25 revision 53290)
```

* Check Rails Version (>= 5.0.x)

```
rails --version
Rails 5.0.0.1
```

* Check Bundler Version (>= 1.11.x)

```
bundle --version
Bundler version 1.11.2
```

* Check PostgreSQL Version (>= 9.5.x)

```
postgres --version
psql (9.5.4)
```

* Check Redis Version (>= 3.2.x)

```
redis-server --version
Redis server v=3.2.3 sha=00000000:0 malloc=libc bits=64 build=ec5e6acb1f26de13
```


* Check node.js Version (>= 4.4.x)

```
node --version
v5.12.0
```

* Check npm Version (>= 3.0.x)

```
v3.8.0
```


### CREATE APP

```
rails new basestation -d postgresql
cd basestation
```

### CONFIGURE POSTGRESQL DATABASE

* Create a new basestation user with CREATEDB and LOGIN privileges.

```
psql
postgres=# CREATE ROLE basestation WITH CREATEDB LOGIN PASSWORD 'password';
CREATE ROLE
```

* Verify the new user is created

```
postgres=# \du
Role name  |                         Attributes                         | Member of
-------------+------------------------------------------------------------+-----------
basestation | Create DB                                                  | {}
postgres    | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```

* Update config/secrets.yml with Database Auth Configuration

```
# Example Below

development:
  secret_key_base: <secret_key_here>
  database_host: localhost
  database_name: basestation_dev
  database_username: basestation
  database_password: password

test:
  secret_key_base: <secret_key_here>
  database_host: localhost
  database_name: basestation_tst
  database_username: basestation
  database_password: password

# Do not keep production secrets in the repository,
# instead read values from the environment.
production:
  secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
  database_host: localhost
  database_name: basestation_prd
  database_username: basestation
  database_password: password
```

* Update config/database.yml to use the configuration defined in secrets.yml

```
development:
  <<: *default
  host: <%= Rails.application.secrets.database_host %>
  database: <%= Rails.application.secrets.database_name %>
  username: <%= Rails.application.secrets.database_username %>
  password: <%= Rails.application.secrets.database_password %>

test:
  <<: *default
  host: <%= Rails.application.secrets.database_host %>
  database: <%= Rails.application.secrets.database_name %>
  username: <%= Rails.application.secrets.database_username %>
  password: <%= Rails.application.secrets.database_password %>

production:
  <<: *default
  host: <%= Rails.application.secrets.database_host %>
  database: <%= Rails.application.secrets.database_name %>
  username: <%= Rails.application.secrets.database_username %>
  password: <%= ENV['BASESTATION_DATABASE_PASSWORD'] %>
```  

* Create the Database

```
rails db:create
```

### UPDATE GEMFILE DEPENDENCIES

/basestation/Gemfile

* Comment out coffee-rails
* Uncomment out the following gems (redis, bcrypt)
* Update bcrypt gem to v3.1.10
* Add devise gem for Authentication
* Add activeadmin gems for Admin Interface

```
# Use CoffeeScript for .coffee assets and views
# gem 'coffee-rails', '~> 4.2'

# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 3.0'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.10'

# Authentication via Devise
gem 'devise'

# Active Admin (Master Branch for Rails 5.x Support)
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', github: 'activeadmin/inherited_resources'

```

* Run bundle install

```
bundle install
```

### UPDATE CSS AND JS VENDOR DEPENDENCIES

We're using the [SB ADMIN Bootstrap Theme](https://startbootstrap.com/template-overviews/sb-admin/)

* Download the Theme and Dependencies
* Copy font-awesome.css to /vendor/assets/stylesheets
* Copy bootstrap.css to /vendor/assets/stylesheets
* Copy sb-admin.css to /vendor/assets/stylesheets
* Update /app/assets/stylesheets/application.css

```
*= require_tree .
*= font-awesome
*= bootstrap
*= sb-admin
*= require_self
```

* Copy bootstrap.js to /vendor/assets/javascripts
* Update /app/assets/javascripts/application.js

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
```
