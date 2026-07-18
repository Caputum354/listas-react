// Exercício 5 — Quadrado com retorno implícito
// SEM chaves {}: a expressão n * n é retornada automaticamente.
// Com chaves seria: (n) => { return n * n }
const quadrado = (n) => n * n;

// Componente de demonstração
function Ex05() {
  return (
    <pre>
      {`quadrado(4) = ${quadrado(4)}
quadrado(9) = ${quadrado(9)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex05;
