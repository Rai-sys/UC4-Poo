const {produto} = require("./produto");

class pedido {
    #produtos

    constructor() {
        this.#produtos = [];
        Object.freeze(this)
    }
    adicionarProduto(produto) {
        if (produto instanceof produto) {
            this.#produtos.push(produto)
        } else {
            console.log("Somente objetos do tipo 'produto' podem ser adicionados!")
        }
    }
    mostrarPedido() {
    console.log("Resumo do pedido: ");
    this.#produtos.forEach(produto => {
        console.log(produto.getInfoProduto());
    })
}
}



module.exports = {pedido};