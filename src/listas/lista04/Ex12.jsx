// Exercício 12 — Componente CardProduto
// Recebe nome, preco e descricao e organiza como um card visual
function CardProduto({ nome, preco, descricao }) {
  return (
    // Estilos inline dão a aparência de card
    <div style={{ border: "1px solid #ddd", borderRadius: 10, padding: 16, maxWidth: 260 }}>
      {/* Nome do produto como título do card */}
      <h3>{nome}</h3>
      {/* Descrição do produto */}
      <p>{descricao}</p>
      {/* Preço em destaque, formatado com 2 casas decimais */}
      <p style={{ color: "green", fontWeight: "bold" }}>R$ {preco.toFixed(2)}</p>
    </div>
  );
}

// Componente do exercício
function Ex12() {
  return (
    <CardProduto
      nome="Teclado Mecânico"
      preco={299.9}
      descricao="Teclado com switches azuis e iluminação RGB."
    />
  );
}
// Exporta o componente do exercício
export default Ex12;
