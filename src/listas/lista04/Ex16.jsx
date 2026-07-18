// Exercício 16 — Componente CardComImagem
// Recebe imagem, titulo e texto
function CardComImagem({ imagem, titulo, texto }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 10, overflow: "hidden", maxWidth: 260 }}>
      {/* Imagem no topo do card, ocupando toda a largura */}
      <img src={imagem} alt={titulo} style={{ width: "100%" }} />
      {/* Área de texto com padding interno */}
      <div style={{ padding: 12 }}>
        {/* Título do card */}
        <h3>{titulo}</h3>
        {/* Texto descritivo */}
        <p>{texto}</p>
      </div>
    </div>
  );
}

// Componente do exercício
function Ex16() {
  return (
    <CardComImagem
      imagem="https://picsum.photos/260/120"
      titulo="Card com Imagem"
      texto="Este card recebe imagem, título e texto via props."
    />
  );
}
// Exporta o componente do exercício
export default Ex16;
