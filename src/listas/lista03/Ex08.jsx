// Exercício 8 — Componente CardSimples
// Recebe "titulo" e "descricao" e organiza dentro de uma <div>
function CardSimples({ titulo, descricao }) {
  return (
    // style inline (objeto JS) para dar aparência de "card"
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 12 }}>
      {/* Título do card */}
      <h3>{titulo}</h3>
      {/* Descrição do card */}
      <p>{descricao}</p>
    </div>
  );
}

// Componente do exercício
function Ex08() {
  return (
    <CardSimples
      titulo="React"
      descricao="Biblioteca JavaScript para construir interfaces."
    />
  );
}
// Exporta o componente do exercício
export default Ex08;
