import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import {movies} from "./schema";
import * as configuration from "config/configuration";
import {Logger} from "@nestjs/common";

const client = new Pool({
    connectionString: configuration.default().connectionString,
});

const db = drizzle(client);
async function deleteTables() {
    await db.delete(movies);
}

// Seed the database with initial movies
async function seed()  {
    Logger.log('Seeding database...');
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
    Logger.log('Seeding failed, error: ', e);
    process.exit(1);
}).finally(() => {
    Logger.log('Seeding done!');
    process.exit(0)
});