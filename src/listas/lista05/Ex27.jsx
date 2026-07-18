// Exercício 27 — Dashboard composto por componentes menores
// CardEstatistica: mostra UM número em destaque
function CardEstatistica({ titulo, valor, cor }) {
  return (
    <div style={{ background: cor, color: "#fff", borderRadius: 10, padding: 16, minWidth: 120 }}>
      {/* Rótulo da estatística */}
      <p style={{ fontSize: 12 }}>{titulo}</p>
      {/* Valor numérico em destaque */}
      <p style={{ fontSize: 24, fontWeight: "bold" }}>{valor}</p>
    </div>
  );
}

// Dashboard: junta vários cards passando props para cada um
function Dashboard({ estatisticas }) {
  return (
    // Flexbox para alinhar os cards lado a lado
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {/* Gera um card para cada estatística recebida */}
      {estatisticas.map((item) => (
        <CardEstatistica key={item.titulo} titulo={item.titulo} valor={item.valor} cor={item.cor} />
      ))}
    </div>
  );
}

// Componente do exercício
function Ex27() {
  // Dados que alimentam o dashboard
  const estatisticas = [
    { titulo: "Vendas", valor: 152, cor: "#0ea5e9" },
    { titulo: "Clientes", valor: 87, cor: "#22c55e" },
    { titulo: "Pedidos", valor: 34, cor: "#f59e0b" },
  ];
  return <Dashboard estatisticas={estatisticas} />;
}
// Exporta o componente do exercício
export default Ex27;
