// Exercício 3 — Soma simples
// Dois parâmetros (a, b); a expressão após => é retornada automaticamente
const soma = (a, b) => a + b;

// Componente de demonstração
function Ex03() {
  return (
    <pre>
      {`soma(2, 3) = ${soma(2, 3)}
soma(10, 25) = ${soma(10, 25)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex03;
