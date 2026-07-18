// Exercício 24 — Componente Alerta (estilo conforme o tipo)
// Recebe "tipo" (sucesso, erro ou aviso) e "mensagem"
function Alerta({ tipo, mensagem }) {
  // Objeto que mapeia cada tipo para suas cores
  const estilos = {
    sucesso: { background: "#dcfce7", color: "#166534", icone: "✅" },
    erro: { background: "#fee2e2", color: "#991b1b", icone: "❌" },
    aviso: { background: "#fef9c3", color: "#854d0e", icone: "⚠️" },
  };
  // Seleciona o estilo do tipo recebido (ex: estilos["erro"])
  const atual = estilos[tipo];
  return (
    // Aplica fundo e cor do texto conforme o tipo
    <div style={{ background: atual.background, color: atual.color, padding: 10, borderRadius: 6, marginBottom: 8 }}>
      {/* Ícone + mensagem do alerta */}
      {atual.icone} {mensagem}
    </div>
  );
}

// Componente do exercício
function Ex24() {
  return (
    <div>
      {/* Um alerta de cada tipo para demonstrar */}
      <Alerta tipo="sucesso" mensagem="Cadastro realizado com sucesso!" />
      <Alerta tipo="erro" mensagem="Falha ao conectar com o servidor." />
      <Alerta tipo="aviso" mensagem="Sua senha expira em 3 dias." />
    </div>
  );
}
// Exporta o componente do exercício
export default Ex24;
