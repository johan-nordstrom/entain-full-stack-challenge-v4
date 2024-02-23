## Implementation plan
I decided to implement the API first and all the endpoints. I will then implement the frontend and connect it to the API.

## Drizzle ORM
I did some research to find a simple orm to work on postgres, i landed on Drizzle.
To integrate drizzle in the project i used the nestjs-drizzle module. If redoing it i would probably do it without an ORM, i just did not have a good knowledge of all the libraries in typescript. I would use pg-promise if i did it again.

## Database design
If more time i would do a N(3) layout focused on code/clean domain model.
I selected PostgreSQL as database as i am familiar with that and it works well containerized.
If designing database again i would have done genres as a list and one to many relationship.

## Github Pages
I do not have any experience with github pages and it seems to be complicated to connect your own rest api.
I will host the repo on github but i will most likely host the project on a different platform like linode.

## Dev or prod enviroment
In respect of time i just implented a dev stage but it can be extended with a build and prod stage.

## Database seeding
I could write a script that uses tmdb api and populate database but to save time i opted to just insert 10-15 random movies. 

## Trending movies
One addition i could do have done would be to fetch trending movies from tmdb and filter on my local database.
