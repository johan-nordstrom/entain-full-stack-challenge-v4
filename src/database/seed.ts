import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import {movies} from "./schema";
import * as configuration from "config/configuration";

const client = new Pool({
    connectionString: configuration.default().connectionString,
});

const db = drizzle(client);
async function deleteTables() {
    await db.delete(movies);
}

// Seed the database with initial movies
async function seed()  {
    console.log('Seeding database...');
    return deleteTables().then( async () => {
        let movs = [
            { Title: "The Matrix", Genre: "Action" },
            { Title: "The Matrix Reloaded", Genre: "Action" },
            ];

        for (let mov of movs) {
            await db.insert(movies).values([
                {
                    title: mov.Title,
                    genre: mov.Genre,
                },
            ]).returning();
        }
    });
};

seed().catch((e) => {
    console.error('Seeding failed, error: ', e);
    process.exit(1);
}).finally(() => {
    console.log('Seeding done!');
    process.exit(0)
});