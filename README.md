# README

## Motivation

### What is BaseStation?
BaseStation is a DevOps inspired API platform for technology teams who want to get more out of ChatOps and Microservices.  It is designed to be very lightweight, highly extensible, and uber efficient.

#### CORE COMPONENTS

*[Basestation Repository]* - A User, Endpoint, and HTTP Bearer Token Repository

*[Basestation Hub]* - A Robust RESTful / WebHooks API Hub built on-top of Express.js

*[Basestation Transceiver]* - A Node Process Daemon that when configured, communicates (receives/transmits) to the mothership (Basestation Hub) and runs Webhooks APIs on Device Endpoints which integrate with Basestation Hub API using HTTP Bearer Tokens.

*[Basestation AuthTokens]* - HTTP Bearer Tokens that are used to authenticate Stateless / Sessionless API Requests to the Hub and to Endpoints.



### Start with WHY
Base Station was an idea that was developed over time after working for an international start-up where we were rapidly maturing and scaling our DevOps Capabilities with a very small team of engineers.  As we continued to climb we reached higher and higher plateaus… throughout this process we began to get greater perspective and see new challenges… (i.e. one more thing)

We got to a point of visibility where we wanted to begin working with Higher Levels of Abstraction to Orchestrate more Complex Workflows and Processes (Events, Activities, and Services) across our entire Platform Infrastructure… which included our Office and Datacenter Environments… as well as our Ops Environment which had grown to include quite a few DevOps focused apps and services… (Chef, Hubot, Consul, Sensu, Terraform, Nexus, Jenkins, etc)

We work primarily with Open Source Technology… which is what makes DevOps Great… and when looking at the OTS (off the shelf) Market and Community… we saw that there was something missing to help us take our game to the next level… we needed a 100% open source platform that helps to seamlessly bring many of these capabilities together… and a platform that scales because it doesn't wind up costing you more than the infrastructure you are managing when you get out of the freemium tier.  (licenses by host, user, core, etc… yuck!)

We're designing BaseStation for scalability, flexibility, and performance.  We want teams to see the immediate value of integrating BaseStation with your existing DevOps and microservices solutions.

Our Commitment...
* 100% Open Source full stack, components and features!
* DevOps inspired Features and Integrations that work in Real Time!
* We will hold nothing back... Base Station will Ship with Everything… Always!


### How it is Built
* Ruby (https://www.ruby-lang.org/en/)
* Rails Framework (http://rubyonrails.org/)
* PostgreSQL Object-Relational Database (https://www.postgresql.org/)
* Redis In-Memory Database Cache (http://redis.io/)
* Node.js Asynchronous Services (https://nodejs.org/en/)


### Who is Copyleft.io?
- We are a seasoned collection of technology Professionals and Practitioners
- Copyleft.io designs and builds 100% open source solutions. We hold nothing back. We ship everything.
- We provide Hosting, Support, and Consulting Services for teams wishing to take their game to the next level and would like the benefit of our experience with DevOps Automation, Infrastructure as a Service, Environment as a Service, and Cloud Based Architecture.


## Prerequisites
- Node.js (https://nodejs.org)
- PM2 Node Process Manager (http://pm2.keymetrics.io/)
- Express.js (https://expressjs.com/)
- MongoDB (https://www.mongodb.com/)
- Passport.js (http://passportjs.org/)
- Passport HTTP Bearer (https://github.com/jaredhanson/passport-http-bearer)
- EJS Embedded Javascript Templates (http://www.embeddedjs.com/)


## Documentation

* [Development ](docs/development.md)
* TODO [Architecture ](docs/architecture.md)
* TODO [Installation](docs/installation.md)
* TODO [Configuration](docs/configuration.md)
* TODO [Testing](docs/testing.md)
* TODO [Deployment](docs/deployment.md)


### Built with <3 by the Hobbyists at Copyleft.io
