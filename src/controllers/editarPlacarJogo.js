const dbJogos = require("../repositories/biblioteca");
const { response } = require("../utils/response");

const editarPlacarDoJogo = async (ctx) => {
  const { id, golsCasa, golsVisitante } = ctx.request.body;

  if (!id || !golsCasa || !golsVisitante) {
    ctx.status = 400;
    ctx.body = "Atualização mal formatada";
    return;
  }

  const result = await dbJogos.atualizarPlacarJogo(id, golsCasa, golsVisitante);

  return response(ctx, 200, result);
};

module.exports = { editarPlacarDoJogo };
