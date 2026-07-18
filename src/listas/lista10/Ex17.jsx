// Exercício 17 — Soma de carrinho com reduce
function Ex17() {
  // Preços do carrinho
  const precos = [29.9, 105.5, 12.6];
  // reduce percorre o array acumulando um valor:
  // "total" é o acumulador, "preco" é o item atual, 0 é o valor inicial
  const somarCarrinho = (valores) => valores.reduce((total, preco) => total + preco, 0);
  return (
    <pre>
      {`Itens: [${precos.join(", ")}]
Total do carrinho: R$ ${somarCarrinho(precos).toFixed(2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex17;
