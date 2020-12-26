import knexConfig from "./knexfile";
import knex from "knex";

let useConfig: any = knexConfig.development;

const env = process.env.NODE_ENV || "development";

if (env === "production") {
  useConfig = knexConfig.production;
}

console.log(`Use database config in ${env} mode`);

const db = knex(useConfig);

export default db;
