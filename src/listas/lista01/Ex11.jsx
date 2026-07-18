// Exercício 11 — Mostrar frase com 3 variáveis
function Ex11() {
  // Nome do estudante
  const nome = "Lucas";
  // Curso que ele estuda
  const curso = "React";
  // Escola onde estuda
  const escola = "Faculdade Flamingo";
  // Monta a frase interpolando as três variáveis
  return <p>{nome} estuda {curso} na {escola}.</p>;
}
// Exporta o componente
export default Ex11;
