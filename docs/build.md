# The Build
This is the beginning...

## Prerequisites

#### Node.js

    $ node -v
    v5.12.0

#### Node Package Manager

    $ npm -v
    3.8.6


## Initialize Project

    $ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg> --save` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    name: (basestation)
    version: (1.0.0)
    description: A DevOps inspired API platform for technology teams who want to get more out of ChatOps and Microservices.
    entry point: (index.js) server.js
    test command:
    git repository: (https://github.com/Copyleft-io/basestation.git)
    keywords: node.js, express.js, npm, webhooks, REST, API, DevOps, ChatOps, MicroServices, mongodb
    author: Brian Hooper <afellohobbyist@gmail.com> <brian.hooper@copyleft.io>
    license: (ISC) MPL-2.0
    About to write to /Users/brian.hooper/Github/copyleft-io/basestation/package.json:


## Install Project Dependencies

#### Update .gitignore to not track node_modules

#### Install Dependencies using Node Package Manager

    # Install the Express Application Framework
    $ npm install express --save

    # Install Passport JS
    #   - Local Password Authentication for User Auth to Simple UI APP
    #   - HTTP Bearer Token Authentication for Stateless/Sessionless Auth to API
    $ npm install passport passport-local passport-http-bearer --save

    # Install bcrypt for our Local Password Authentication
    $ npm install bcrypt-nodejs --save

    # Install Mongoose for MongoDB Schema
    $ npm install mongoose --save

    # Install EJS Templates
    $ npm install ejs --save

    # Install Morgan... a HTTP request logger middleware for node.js
    $ npm install morgan --save

    # Install Connect-Flash... Flash Messages stored in Session
    $ npm install connect-flash --save

    # Install Additional Express.js Dependencies that are not automatically shipped...

    # body-parser
    #   - Node.js body parsing middleware.
    #   - Parse incoming request bodies in a middleware before your handlers,
    #     available under the req.body property.
    $ npm install body-parser --save

    # cookie-parser
    #   - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    $ npm install cookie-parser --save

    # method-override
    #   - Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    $ npm install method-override --save

    # express-session
    #   - Create a session middleware with options.
    $ npm install express-session --save


#### Create MongoDB Repository (mlab sandbox)
We're going to use mlab for our development sandbox.

    # Create an mlab account
    # Create a sandbox mongodb Repository
    # Create a new user with read/write permissions
    # Get the URL Connection for the MongoDB and User


#### Create Project Directory Structure

    /basestation
        /app
            /modules
                /base
                    /config
                        passport.js
                    /models
                        user.js
                    /views
                        /partials
                            head.ejs
                            header.ejs
                        index.ejs
                        login.ejs
                        profile.ejs
                        signup.ejs
                    base.js  # module export of base.js
        /config
            database.js
        /docs
            build.md
        /node_modules
        /public
            /images
            /scripts
            /styles
        .gitignore
        LICENSE
        package.json
        README.md
        server.js  # main entry point to run our application
