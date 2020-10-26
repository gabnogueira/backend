const dbJogos = require("../utils/databaseJogos");

const queryJogos = async () => {
  const query = `SELECT * FROM jogos`;

  const result = await dbJogos.query(query);

  return result.rows;
};

const queryJogosPorRodada = async (rodada) => {
  const query = {
    text: `SELECT * FROM jogos WHERE rodada = $1;`,
    values: [rodada],
  };

  const result = await dbJogos.query(query);

  return result.rows;
};

module.exports = { queryJogos, queryJogosPorRodada };
