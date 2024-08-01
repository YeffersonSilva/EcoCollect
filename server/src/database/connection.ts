import { Knex } from "knex";
import path from "path";

const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true  // SQLite requires this option to handle null values correctly
};

export default config;
