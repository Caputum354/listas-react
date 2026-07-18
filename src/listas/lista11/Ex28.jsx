// Exercício 28 — High-Order Function (função que recebe função)
function Ex28() {
  // Recebe dois números e UMA FUNÇÃO de operação, e a executa
  const executarOperacao = (a, b, operacao) => operacao(a, b);
  // Diferentes operações passadas como arrow functions
  const somou = executarOperacao(10, 5, (x, y) => x + y);
  const multiplicou = executarOperacao(10, 5, (x, y) => x * y);
  const maior = executarOperacao(10, 5, (x, y) => (x > y ? x : y));
  return (
    <pre>
      {`executarOperacao(10, 5, soma)          = ${somou}
executarOperacao(10, 5, multiplicação) = ${multiplicou}
executarOperacao(10, 5, maior)         = ${maior}`}
    </pre>
  );
}
// Exporta o componente
export default Ex28;
