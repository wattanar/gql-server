const knexConfig = {
  development: {
    client: "mssql",
    connection: {
      database: "graphql",
      server: "",
      user: "",
      password: "",
      options: {
        enableArithAbort: true,
        trustedConnection: true,
        encrypt: false,
      },
      debug: ["knex:query"],
      migrations: {
        tableName: "knex_migrations",
      },
    },
  },
  production: {
    client: "mssql",
    connection: {
      database: "",
      server: "",
      user: "",
      password: "",
      options: {
        enableArithAbort: true,
        trustedConnection: true,
        encrypt: false,
      },
      migrations: {
        tableName: "knex_migrations",
      },
    },
  },
};

export default knexConfig;
