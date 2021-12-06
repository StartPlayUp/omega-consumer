const { isPropertyAccessChain } = require("typescript");

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DATABASE_ID,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: true,
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/typeorm/entity/*{.ts,.js}" :
      (process.env.NODE_ENV === 'test' ? "**/entity/*{.ts,.js}"
        : "server/typeorm/entity/*{.ts,.js}"),
  ],
  migrations: ["server/typeorm/migration/**/*{.ts,.js}"],
  subscribers: ["server/typeorm/subscriber/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "typeorm/entity",
    migrationsDir: "typeorm/migration",
    subscribersDir: "typeorm/subscriber",
  },
};


[
  {
    name: "test",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm-test",
    synchronize: true,
    logging: false,
    dropSchema: true,
    entities: ["src/entity/*.ts"],
    subscribers: ["src/migration/*.ts"],
    migrations: ["src/migration/*.ts"],
  },
  {
    name: "production",
    type: "mysql",
    host: '',
    port: '',
    username: '',
    password: '',
    database: '',
    synchronize: false,
    logging: true,
    entities: ["dist/entity/*.js"],
    subscribers: ["dist/migration/*.js"],
    migrations: ["dist/migration/*.js"],
    migrationsTableName: "migrations",
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  },
];