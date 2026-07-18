// Exercício 7 — Array de preços
function Ex07() {
  // Array com os preços dos produtos
  const precos = [10, 25, 40];
  // Exibe os dois primeiros preços
  return (
    <div>
      {/* Preço do produto 1 (índice 0) */}
      <p>Preço do produto 1: R${precos[0]}</p>
      {/* Preço do produto 2 (índice 1) */}
      <p>Preço do produto 2: R${precos[1]}</p>
    </div>
  );
}
// Exporta o componente
export default Ex07;
