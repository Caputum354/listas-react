// Exercício 9 — Multiplicação por 10 em uma única linha
// Uma linha só: parâmetro => expressão
const vezesDez = (valor) => valor * 10;

// Componente de demonstração
function Ex09() {
  return (
    <pre>
      {`vezesDez(7) = ${vezesDez(7)}
vezesDez(3.5) = ${vezesDez(3.5)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex09;
