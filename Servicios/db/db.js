import knex from "knex";
import { Model } from "objection";
import dotenv from "dotenv";
dotenv.config();

const knexInstance = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "63.Lafa.96",
    database: "Lugares_turisticos",
  },
  pool: { min: 2, max: 10 },
});

Model.knex(knexInstance);

export default knexInstance;
