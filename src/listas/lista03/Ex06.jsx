// Exercício 6 — Componente Produto
// Recebe "nome" e "preco" como props
function Produto({ nome, preco }) {
  return (
    <div>
      {/* Nome do produto em negrito */}
      <p><strong>{nome}</strong></p>
      {/* Preço formatado com 2 casas decimais usando toFixed(2) */}
      <p>R$ {preco.toFixed(2)}</p>
    </div>
  );
}

// Componente do exercício
function Ex06() {
  // preco entre chaves porque é um número, não um texto
  return <Produto nome="Mouse Gamer" preco={149.9} />;
}
// Exporta o componente do exercício
export default Ex06;
