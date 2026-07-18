// Exercício 22 — Componente ListaProdutos
// CardProduto: exibe UM produto
function CardProduto({ nome, preco }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 10, marginBottom: 8 }}>
      {/* Nome e preço do produto */}
      <strong>{nome}</strong> — R$ {preco.toFixed(2)}
    </div>
  );
}

// ListaProdutos: recebe um ARRAY de produtos e renderiza vários cards
function ListaProdutos({ produtos }) {
  return (
    <div>
      {/* .map() transforma cada objeto do array em um CardProduto */}
      {produtos.map((produto) => (
        // Espalha as props: nome={produto.nome} preco={produto.preco}
        <CardProduto key={produto.nome} nome={produto.nome} preco={produto.preco} />
      ))}
    </div>
  );
}

// Componente do exercício
function Ex22() {
  // Array de produtos passado via props
  const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 89.9 },
    { nome: "Teclado", preco: 199.5 },
  ];
  return <ListaProdutos produtos={produtos} />;
}
// Exporta o componente do exercício
export default Ex22;
