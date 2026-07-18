// Exercício 23 — BotaoCustomizado (estilos dinâmicos via props)
// Recebe texto, cor e tamanho e monta o estilo dinamicamente
function BotaoCustomizado({ texto, cor, tamanho }) {
  // Objeto de estilo construído a partir das props recebidas
  const estilo = {
    backgroundColor: cor,        // cor de fundo vinda da prop "cor"
    fontSize: tamanho,           // tamanho da fonte vindo da prop "tamanho"
    color: "#fff",               // texto sempre branco
    border: "none",              // sem borda
    borderRadius: 6,             // cantos arredondados
    padding: "8px 16px",         // espaçamento interno
    marginRight: 8,              // espaço entre os botões
    cursor: "pointer",           // cursor de mãozinha
  };
  // Aplica o objeto de estilo no botão
  return <button style={estilo}>{texto}</button>;
}

// Componente do exercício
function Ex23() {
  return (
    <div>
      {/* Cada botão recebe cor e tamanho diferentes */}
      <BotaoCustomizado texto="Pequeno" cor="#22c55e" tamanho={12} />
      <BotaoCustomizado texto="Médio" cor="#0ea5e9" tamanho={16} />
      <BotaoCustomizado texto="Grande" cor="#ef4444" tamanho={20} />
    </div>
  );
}
// Exporta o componente do exercício
export default Ex23;
