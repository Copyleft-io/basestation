# Configuration

TODO: This is the configuration guide

TODO: Environment Variable Configuration

TODO: PostgreSQL DB Configuration

Create a new basestation user with CREATEDB and LOGIN privileges.
```
psql
postgres=# CREATE ROLE basestation WITH CREATEDB LOGIN PASSWORD 'password';
CREATE ROLE
```

Verify the new user is created
```
postgres=# \du
Role name  |                         Attributes                         | Member of
-------------+------------------------------------------------------------+-----------
basestation | Create DB                                                  | {}
postgres    | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```

* UPDATE config/secrets.yml

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

* UPDATE config/database.yml to use the configuration defined in config/secrets.yml

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

* CREATE THE DATABASE

```
rails db:migrate
```


TODO: Node.js and NPM Configuration (PM2)
