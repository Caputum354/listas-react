// Exercício 10 — Rest operator básico
function Ex10() {
  // Array original
  const numeros = [10, 20, 30, 40];
  // "primeiro" pega o índice 0; "...outros" AGRUPA todo o resto
  // em um novo array. O rest deve ser sempre o ÚLTIMO da lista
  const [primeiro, ...outros] = numeros;
  return (
    <pre>
      {`primeiro = ${primeiro}
outros = [${outros.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex10;
