import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { movies } from "./schema";
import * as configuration from "config/configuration";
import { Logger } from "@nestjs/common";

const client = new Pool({
    connectionString: configuration.default().connectionString,
});

const db = drizzle(client);
async function deleteTables() {
    await db.delete(movies);
}

// Seed the database with initial movies
async function seed() {
    Logger.log('Seeding database...');
    return deleteTables().then(async () => {
        let movs = [
            { Title: "The Matrix", Genre: "Action", PosterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", BackdropPath: "/ncEsesgOJDNrTUED89hYbA117wo.jpg" },
            { Title: "The Matrix Reloaded", Genre: "Action", PosterPath: "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg", BackdropPath: "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg" },
        ];

        for (let mov of movs) {
            await db.insert(movies).values([
                {
                    title: mov.Title,
                    genre: mov.Genre,
                    poster_path: mov.PosterPath,
                    backdrop_path: mov.BackdropPath,
                },
            ]).returning();
        }
    });
};

seed().catch((e) => {
    Logger.log('Seeding failed, error: ', e);
    process.exit(1);
}).finally(() => {
    Logger.log('Seeding done!');
    process.exit(0)
});