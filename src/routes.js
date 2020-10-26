const Router = require("koa-router");
const router = new Router();
const classificacao = require("./controllers/obterClassificacao");
const jogosPorRodada = require("./controllers/obterJogosPorRodada");

router.get("/classificacao", classificacao.obterClassificacao);
router.get(`/jogos/:rodada`, jogosPorRodada.listarJogosPorRodada);

module.exports = router;
