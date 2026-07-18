// Exercício 12 — Calcular idade aproximada
function Ex12() {
  // Ano em que a pessoa nasceu
  const anoNascimento = 2000;
  // Ano atual
  const anoAtual = 2026;
  // A subtração dentro de {} calcula a idade (2026 - 2000 = 26)
  return <p>Idade aproximada: {anoAtual - anoNascimento} anos</p>;
}
// Exporta o componente
export default Ex12;
