// Exercício 7 — Mostrar preço de produto
function Ex07() {
  // Nome do produto
  const produto = "Notebook";
  // Preço do produto (número)
  const preco = 3500;
  // Exibe as duas informações em linhas separadas
  return (
    <div>
      {/* Linha com o nome do produto */}
      <p>Produto: {produto}</p>
      {/* Linha com o preço, com "R$" escrito no texto */}
      <p>Preço: R$ {preco}</p>
    </div>
  );
}
// Exporta o componente
export default Ex07;
