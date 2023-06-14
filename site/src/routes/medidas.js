var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");



router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;