// Exercício 21 — Componente com children
// "children" é uma prop ESPECIAL: tudo que for colocado ENTRE as tags
// <Card> ... </Card> chega aqui automaticamente
function Card({ children }) {
  return (
    // O card apenas cria a "moldura" visual
    <div style={{ border: "2px solid #0ea5e9", borderRadius: 10, padding: 16 }}>
      {/* Renderiza qualquer conteúdo interno recebido */}
      {children}
    </div>
  );
}

// Componente do exercício
function Ex21() {
  return (
    // Tudo dentro de <Card> vira o "children" do componente
    <Card>
      <h3>Título livre</h3>
      <p>Este parágrafo foi passado como children.</p>
      <button>Até botões funcionam!</button>
    </Card>
  );
}
// Exporta o componente do exercício
export default Ex21;
