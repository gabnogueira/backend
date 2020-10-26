const { Client } = require("pg");

require("dotenv").config();

const dbJogos = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

dbJogos
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

module.exports = dbJogos;
