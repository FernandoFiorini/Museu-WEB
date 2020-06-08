require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: "127.0.0.1",
  username: "postgres",
  password: "nene7852",
  database: "museu_da_era",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};