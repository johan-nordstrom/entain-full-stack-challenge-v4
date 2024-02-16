import {PgColumn} from "drizzle-orm/pg-core";

export default interface RepositoryInterface<T> {
    all(): Promise<T[]>;
    findMany(column: PgColumn, text: string): Promise<T[]>;
}