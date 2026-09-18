function calcularTotal(itens, cupom) {

  let subtotal = 0;

  for (let i = 0; i < itens.length; i++) {

    // BUG 1 CORRIGIDO:
    // Valida quantidade e preço dos itens.
    if (itens[i].quantidade <= 0 || itens[i].preco < 0) {
      throw new Error("Carrinho inválido");
    }

    subtotal += itens[i].preco * itens[i].quantidade;

  }

  if (itens.length === 0 || subtotal < 0) {

    throw new Error("Carrinho inválido");

  }

  let desconto = 0;

  if (cupom === "PROMO10") {

    // BUG 2 CORRIGIDO:
    // Aplica 10% de desconto sobre o subtotal.
    desconto = subtotal * 0.10;

  }

  let frete = 15;

  // BUG 3 CORRIGIDO:
  // Frete grátis para compras de R$ 100 ou mais.
  if (subtotal >= 100) {

    frete = 0;

  }

  let total = subtotal - desconto + frete;

  // BUG 4 CORRIGIDO:
  // Arredonda o total para duas casas decimais.
  return Number(total.toFixed(2));

}

module.exports = { calcularTotal };