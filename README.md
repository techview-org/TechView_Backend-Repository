# TechView

> TechView is a community-based networking application that allows users to post questions and privately chat with each other about their interview process experiences in the tech industry. Users can share the technical interview questions they have been asked to solve or the most common behavioral interview questions they have been asked to help others prepare. After accepting a job offer, users can post and share the successes of their hard work on the forum board!  

## Team

  - __Product Owner__: Wayne March
  - __Scrum Master__: Emmanuel Ruiz
  - __Development Team Members__: Cristopher Pico, Aaron Minaya

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> <font color="red">Some usage instructions for getting the app up and running locally</font>

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm init
npm install cors express knex nodemon pg
npx knex migrate:latest
npx knex seed:run
```

### Roadmap

View the project roadmap [here](https://github.com/orgs/techview-org/projects).


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.


## Style Guide

This project adheres to the [Standard JS](https://github.com/standard).