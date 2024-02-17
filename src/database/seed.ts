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
            { Title: "The Godfather", Genre: "Drama", PosterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", BackdropPath: "/jMBfXvU9Z4d3q6Z6cZK5f5ZGtOq.jpg" },
            { Title: "Inception", Genre: "Action", PosterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", BackdropPath: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg" },
            { Title: "The Dark Knight", Genre: "Action", PosterPath: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg", BackdropPath: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg" },
            { Title: "The Shawshank Redemption", Genre: "Drama", PosterPath: "/q6y0Go1tsGEs6zU2bFjGj7jZq5e.jpg", BackdropPath: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg" },
            { Title: "The Lord of the Rings: The Return of the King", Genre: "Action", PosterPath: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", BackdropPath: "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg" },
            { Title: "The Lord of the Rings: The Fellowship of the Ring", Genre: "Action", PosterPath: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", BackdropPath: "/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg" },
            { Title: "The Lord of the Rings: The Two Towers", Genre: "Action", PosterPath: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg", BackdropPath: "/d8uKZVw9lRj5fz8n8q4aE8oUzDg.jpg" },
            { Title: "The Matrix", Genre: "Action", PosterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", BackdropPath: "/ncEsesgOJDNrTUED89hYbA117wo.jpg" },
            { Title: "The Matrix Reloaded", Genre: "Action", PosterPath: "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg", BackdropPath: "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg" },
            { Title: "The Matrix Revolutions", Genre: "Action", PosterPath: "/lZpWprJqbIFpEV5M6Hd4z8zqCp3.jpg", BackdropPath: "/533xAMhhVyjTy8hwMUFEt5TuDfR.jpg" },
            { Title: "The Dark Knight Rises", Genre: "Action", PosterPath: "/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg", BackdropPath: "/bC6JDkO8oXReF9n2u8Z9Yf5ZSd7.jpg" },
            { Title: "The Godfather: Part II", Genre: "Drama", PosterPath: "/hek3koDUyRQk7FIhPXdeO9B8kPR.jpg", BackdropPath: "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg" },
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