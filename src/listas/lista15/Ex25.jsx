// Exercício 25 — Refatoração de objeto com rest operator
function Ex25() {
  // Configuração complexa com propriedades que queremos DESCARTAR
  const configuracao = {
    tema: "escuro",
    idioma: "pt-BR",
    debug: true,          // não queremos manter
    logsInternos: [],     // não queremos manter
    versaoBeta: false,    // não queremos manter
  };
  // Desestrutura as indesejadas por nome e agrupa o RESTO em "configuracaoLimpa"
  const { debug, logsInternos, versaoBeta, ...configuracaoLimpa } = configuracao;
  return (
    <pre>
      {`Original tinha ${Object.keys(configuracao).length} propriedades.
Novo objeto (só o que interessa):
${JSON.stringify(configuracaoLimpa, null, 2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex25;
