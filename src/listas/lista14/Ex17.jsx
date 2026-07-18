// Exercício 17 — Desestruturação de arrays aninhados
function Ex17() {
  // Array com um array DENTRO: [1, [2, 3], 4]
  const dados = [1, [2, 3], 4];
  // O padrão espelha a estrutura:
  // pula o 1 (primeira posição), entra no [2, 3] com [dois, tres]
  const [, [dois, tres]] = dados;
  return (
    <pre>
      {`Array: [1, [2, 3], 4]
dois = ${dois}
tres = ${tres}`}
    </pre>
  );
}
// Exporta o componente
export default Ex17;
