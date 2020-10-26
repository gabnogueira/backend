const dbJogos = require("../repositories/biblioteca");

const listarJogosPorRodada = async (ctx) => {
  const { rodada = null } = ctx.params;

  if (!rodada) {
    ctx.status = 400;
    ctx.body = "Pedido mal formatado";
  }

  const jogos = await dbJogos.queryJogosPorRodada(rodada);

  if (jogos) {
    ctx.status = 200;
    ctx.body = { jogos };
    return;
  }

  ctx.status = 404;
  ctx.body = { rodada: null };
};

module.exports = { listarJogosPorRodada };
