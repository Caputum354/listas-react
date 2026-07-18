// Exercício 10 — Componente Status
// Recebe a prop "mensagem" e exibe em um <span>
function Status({ mensagem }) {
  // O <span> é um elemento "inline" (não quebra linha)
  return <span>{mensagem}</span>;
}

// Componente do exercício
function Ex10() {
  return (
    <p>
      {/* O Status aparece dentro do texto do parágrafo */}
      Situação do pedido: <Status mensagem="✅ Entregue com sucesso" />
    </p>
  );
}
// Exporta o componente do exercício
export default Ex10;
