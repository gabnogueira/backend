const Router = require("koa-router");
const router = new Router();
const classificacao = require("./controllers/obterClassificacao");
const jogosPorRodada = require("./controllers/obterJogosPorRodada");
const editarPlacarJogo = require("./controllers/editarPlacarJogo");
const autenticarUser = require("./controllers/autenticacao");
const session = require("./middlewares/session");

router.get("/classificacao", classificacao.obterClassificacao);
router.get(`/jogos/:rodada`, jogosPorRodada.listarJogosPorRodada);
router.put(`/jogos`, session.verificacao, editarPlacarJogo.editarPlacarDoJogo);
router.post(`/auth`, autenticarUser.autenticarUser);

module.exports = router;
