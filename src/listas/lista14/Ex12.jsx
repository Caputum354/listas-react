// Exercício 12 — Formatação de preços
function Ex12() {
  // Array de objetos Produto
  const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 90 },
    { nome: "Teclado", preco: 200 },
  ];
  // map + desestruturação no parâmetro + template string
  const frases = produtos.map(({ nome, preco }) => `O produto ${nome} custa R$ ${preco}`);
  return <pre>{frases.join("\n")}</pre>;
}
// Exporta o componente
export default Ex12;
