const dbJogos = require("../utils/databaseJogos");

const queryJogos = async () => {
  const query = `SELECT * FROM jogos`;

  const result = await dbJogos.query(query);

  return result.rows;
};

const queryJogosPorRodada = async (rodada) => {
  const query = {
    text: `SELECT * FROM jogos WHERE rodada = $1 ORDER BY id;`,
    values: [rodada],
  };

  const result = await dbJogos.query(query);

  return result.rows;
};

const atualizarPlacarJogo = async (id, golsCasa, golsVisitante) => {
  const query = `UPDATE jogos SET gols_casa = ${golsCasa}, gols_visitante = ${golsVisitante} WHERE id = ${id} RETURNING *;`;

  const result = await dbJogos.query(query);

  return result.rows;
};

const queryUsers = async (email) => {
  const query = `SELECT * FROM users WHERE email = '${email}';`;

  const result = await dbJogos.query(query);

  return result.rows.shift();
};

module.exports = {
  queryJogos,
  queryJogosPorRodada,
  atualizarPlacarJogo,
  queryUsers,
};
