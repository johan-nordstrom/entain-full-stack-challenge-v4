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
    Logger.log('Emptying tables...');
    await db.delete(movies);
}

async function addMovies() {
    let movs = [
        {
            Title: "The Godfather",
            Genre: "Drama",
            PosterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            BackdropPath: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
        },
        {
            Title: "Inception",
            Genre: "Action",
            PosterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            BackdropPath: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
        },
        {
            Title: "The Dark Knight",
            Genre: "Action",
            PosterPath: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
            BackdropPath: "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg"
        },
        {
            Title: "The Shawshank Redemption",
            Genre: "Drama",
            PosterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            BackdropPath: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
        },
        {
            Title: "The Lord of the Rings: The Return of the King",
            Genre: "Action",
            PosterPath: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            BackdropPath: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg"
        },
        {
            Title: "The Lord of the Rings: The Fellowship of the Ring",
            Genre: "Action",
            PosterPath: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
            BackdropPath: "/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg"
        },
        {
            Title: "The Lord of the Rings: The Two Towers",
            Genre: "Action",
            PosterPath: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
            BackdropPath: "/6G73mNyooWAEQTpckPSnFxFoNmc.jpg"
        },
        {
            Title: "The Matrix",
            Genre: "Action",
            PosterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            BackdropPath: "/ncEsesgOJDNrTUED89hYbA117wo.jpg"
        },
        {
            Title: "The Matrix Reloaded",
            Genre: "Action",
            PosterPath: "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
            BackdropPath: "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg"
        },
        {
            Title: "The Matrix Revolutions",
            Genre: "Action",
            PosterPath: "/qEWiBXJGXK28jGBAm8oFKKTB0WD.jpg",
            BackdropPath: "/533xAMhhVyjTy8hwMUFEt5TuDfR.jpg"
        },
        {
            Title: "The Dark Knight Rises",
            Genre: "Action",
            PosterPath: "/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
            BackdropPath: "/c3OHQncTAnKFhdOTX7D3LTW6son.jpg"
        },
        {
            Title: "The Godfather: Part II",
            Genre: "Drama",
            PosterPath: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
            BackdropPath: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg"
        },
        {
            Title: "A Clockwork Orange",
            Genre: "Drama",
            PosterPath: "/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
            BackdropPath: "/yIonSXf1jdNihhK8PssxO6KCIfz.jpg"
        },
        {
            Title: "2001: A Space Odyssey",
            Genre: "Science Fiction",
            PosterPath: "/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
            BackdropPath: "/w5IDXtifKntw0ajv2co7jFlTQDM.jpg"
        },
        {
            Title: "Goodfellas",
            Genre: "Drama",
            PosterPath: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
            BackdropPath: "/sw7mordbZxgITU877yTpZCud90M.jpg"
        },
        {
            Title: "Blade Runner",
            Genre: "Science Fiction",
            PosterPath: "/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
            BackdropPath: "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg"
        },
        {
            Title: "Blade Runner 2049",
            Genre: "Science Fiction",
            PosterPath: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
            BackdropPath: "/ilRyazdMJwN05exqhwK4tMKBYZs.jpg"
        },
        {
            Title: "Fight Club",
            Genre: "Drama",
            PosterPath: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            BackdropPath: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
        },
        {
            Title: 'Oppenheimer',
            Genre: 'Drama',
            PosterPath: '/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
            BackdropPath: '/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg'
        },
        {
            Title: 'Barbie',
            Genre: 'Comedy',
            PosterPath: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
            BackdropPath: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg'
        }
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
}



// Seed the database with initial movies
async function seed() {
    Logger.log('Seeding database...');

    /*
    if (db.select().from(movies).then((movies) => movies.length > 0)) {
        Logger.log('Database already seeded, skipping...');
        return;
    }
    */

    return deleteTables().then(addMovies);
};

seed().catch((e) => {
    Logger.log('Seeding failed, error: ', e);
    process.exit(1);
}).finally(() => {
    Logger.log('Seeding done!');
    process.exit(0)
});
