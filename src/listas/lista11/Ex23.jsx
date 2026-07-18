// Exercício 23 — Ordenação decrescente com sort
function Ex23() {
  // Array desordenado
  const numeros = [3, 41, 7, 100, 15];
  // sort com (b - a) ordena do MAIOR para o menor.
  // [...numeros] cria uma CÓPIA, pois sort modifica o array original
  const decrescente = [...numeros].sort((a, b) => b - a);
  return (
    <pre>
      {`Original:    [${numeros.join(", ")}]
Decrescente: [${decrescente.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex23;
