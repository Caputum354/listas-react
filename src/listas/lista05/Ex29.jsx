// Exercício 29 — ListaFiltrada (lista + critério via props)
// Recebe "itens" (array de produtos) e "precoMaximo" (critério do filtro)
function ListaFiltrada({ itens, precoMaximo }) {
  // .filter() cria um NOVO array só com os itens que passam no teste
  const filtrados = itens.filter((item) => item.preco <= precoMaximo);
  return (
    <div>
      {/* Mostra qual critério está sendo aplicado */}
      <p>Produtos até R$ {precoMaximo}:</p>
      {/* Renderiza apenas os itens filtrados */}
      {filtrados.map((item) => (
        <p key={item.nome}>• {item.nome} — R$ {item.preco}</p>
      ))}
    </div>
  );
}

// Componente do exercício
function Ex29() {
  // Lista completa de produtos
  const produtos = [
    { nome: "Caneta", preco: 5 },
    { nome: "Caderno", preco: 25 },
    { nome: "Mochila", preco: 120 },
    { nome: "Lapiseira", preco: 15 },
  ];
  // Passa a lista e o critério: só aparecem produtos até R$ 30
  return <ListaFiltrada itens={produtos} precoMaximo={30} />;
}
// Exporta o componente do exercício
export default Ex29;
