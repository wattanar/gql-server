import db from "./db";
import knex from "knex";

(async () => {
  await db.schema.createTable("users", (table: knex) => {
    table.increments("id");
    table.string("username", 100).unique().notNullable();
    table.string("password", 100).notNullable();
    table.string("salt", 100).notNullable();
    table.string("email", 100).notNullable();
    table.integer("is_active").notNullable().defaultTo(1);
    table.timestamps(true, true);
  });

  db.destroy();
})();
