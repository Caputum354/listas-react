// Exercício 4 — Verificar se é par
// O operador % retorna o RESTO da divisão; resto 0 = número par
const ehPar = (numero) => numero % 2 === 0;

// Componente de demonstração
function Ex04() {
  return (
    <pre>
      {`ehPar(4) = ${ehPar(4)}
ehPar(7) = ${ehPar(7)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex04;
