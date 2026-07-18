// Exercício 26 — Calculadora de estoque com totalItem
function Ex26() {
  // Estoque com preço unitário e quantidade
  const estoque = [
    { nome: "Caneta", preco: 2.5, quantidade: 100 },
    { nome: "Caderno", preco: 15, quantidade: 30 },
  ];
  // Spread copia o objeto original e ADICIONA a propriedade totalItem
  const comTotais = estoque.map((item) => ({
    ...item,                                 // mantém nome, preco, quantidade
    totalItem: item.preco * item.quantidade, // nova propriedade calculada
  }));
  return <pre>{JSON.stringify(comTotais, null, 2)}</pre>;
}
// Exporta o componente
export default Ex26;
