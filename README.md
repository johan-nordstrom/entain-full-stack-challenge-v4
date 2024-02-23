# Entain Fullstack Challenge

## Description

This is a simple fullstack application that allows users to browse through a movie database. Stack is React/NestJS/Postgres.
After starting containers run migrations and seed database.

## API Installation
- Clone the repo
- `npm install` 

## Client Installation
```bash
- `cd client`
- `npm install` 
```

## Running the app
```bash
# This starts the database and node container
$ docker compose up

# Starting just database
$ docker compose up database

# local watch mode
$ npm run start:dev
```

## Setting up database
```bash
# Generate migrations
$ npm run generate

# Push migrations
$ npm run migrate

# Seed database
$ npm run seed
```

