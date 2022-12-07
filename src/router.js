const express = require("express");
const { listagemProdutos, vendas } = require("./controllers/sales");

const router = express.Router();

router.get("/produtos", listagemProdutos);
router.post("/produtos", vendas);

module.exports = { router };
