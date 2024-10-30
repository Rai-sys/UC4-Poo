const {produto} = require("./produto");
const {pedido} = require("./pedido");

const produto01 = new produto("Camisa", 60);
const produto02 = new produto("Calça", 70);
const produto03 = new produto("Tênis", 160);

const pedido01 = new pedido();
pedido01.adicionarProduto(produto01);
pedido01.adicionarProduto(produto03);

pedido01.mostrarPedido();