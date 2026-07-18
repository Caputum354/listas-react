// Exercício 26 — Componente Modal reutilizável
// Recebe titulo, conteudo e rodape como props
function Modal({ titulo, conteudo, rodape }) {
  return (
    // Caixa central simulando um modal (sem overlay para simplificar)
    <div style={{ border: "1px solid #cbd5e1", borderRadius: 12, maxWidth: 400, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
      {/* Cabeçalho do modal com o título */}
      <div style={{ padding: 12, borderBottom: "1px solid #e2e8f0", fontWeight: "bold" }}>
        {titulo}
      </div>
      {/* Corpo do modal com o conteúdo */}
      <div style={{ padding: 12 }}>{conteudo}</div>
      {/* Rodapé do modal (normalmente botões de ação) */}
      <div style={{ padding: 12, borderTop: "1px solid #e2e8f0", textAlign: "right" }}>
        {rodape}
      </div>
    </div>
  );
}

// Componente do exercício
function Ex26() {
  return (
    <Modal
      titulo="Confirmar exclusão"
      conteudo="Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita."
      rodape={<button>Confirmar</button>}
    />
  );
}
// Exporta o componente do exercício
export default Ex26;
