## Implementation plan
I decided to implement the API first and all the endpoints. I will then implement the frontend and connect it to the API.

## Drizzle ORM
I did speak to some people who are typescript developers and discussed the best and most simple ORM, i landed on Drizzle.
To integrate drizzle in the project i used the nestjs-drizzle module.

## Database design
If more time i would do a N(3) layout focused on code/clean domain model.
I selected PostgreSQL as database as i am familiar with that and it works well containerized.

## Github Pages
I do not have any experience with github pages and it seems to be complicated to connect your own rest api.
I will host the repo on github but i will most likely host the project on a different platform like linode.

## Repository pattern
I am planning on using the repository pattern for services.

## Host
Set database 127.0.0.1 in /etc/hosts when developing to not have to change postgres url.
Need to figure out why docker is not resolving database host.

## Dev or prod enviroment
In respect of time i will just implement dev and prod enviroment to demonstrate
being able to use different databases depending on enviroment.

## Database seeding
I could write a script that uses tmdb api and populate database but to save time i opted to just insert 10 random movies.