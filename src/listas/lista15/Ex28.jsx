// Exercício 28 — Extrair a primeira coluna de uma matriz
function Ex28() {
  // Matriz: array de arrays (linhas com 2 colunas)
  const matriz = [[1, 2], [3, 4], [5, 6]];
  // Desestrutura cada sub-array pegando SÓ a primeira posição
  const primeiraColuna = matriz.map(([primeiro]) => primeiro);
  return (
    <pre>
      {`Matriz: ${JSON.stringify(matriz)}
Primeira coluna: [${primeiraColuna.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex28;
