// Exercício 11 — Filtrar positivos com filter
function Ex11() {
  // Array original com números positivos e negativos
  const numeros = [-5, 10, -2, 15, -1, 3];
  // filter mantém apenas os itens em que a arrow retorna true (n > 0)
  const positivos = numeros.filter((n) => n > 0);
  return (
    <pre>
      {`Original:  [${numeros.join(", ")}]
Positivos: [${positivos.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex11;
