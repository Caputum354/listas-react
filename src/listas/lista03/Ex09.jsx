// Exercício 9 — Componente Rodape
// Recebe o "ano" como prop
function Rodape({ ano }) {
  // Exibe o símbolo de copyright seguido do ano
  return <footer>© {ano}</footer>;
}

// Componente do exercício
function Ex09() {
  // Passa o ano como número
  return <Rodape ano={2026} />;
}
// Exporta o componente do exercício
export default Ex09;
