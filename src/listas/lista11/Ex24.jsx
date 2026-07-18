// Exercício 24 — Encadeamento: filtrar pares, dobrar e somar
function Ex24() {
  // Array de entrada
  const numeros = [1, 2, 3, 4, 5, 6];
  // Encadeamento (chaining): cada método opera no resultado do anterior
  const resultado = numeros
    .filter((n) => n % 2 === 0)          // 1) mantém os pares: [2, 4, 6]
    .map((n) => n * 2)                   // 2) dobra cada um:   [4, 8, 12]
    .reduce((total, n) => total + n, 0); // 3) soma tudo:       24
  return (
    <pre>
      {`[${numeros.join(", ")}]
-> pares -> dobro -> soma = ${resultado}`}
    </pre>
  );
}
// Exporta o componente
export default Ex24;
