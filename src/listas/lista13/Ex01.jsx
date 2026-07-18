// Exercício 1 — Dobrar valores com map
function Ex01() {
  // Array original
  const numeros = [1, 2, 3, 4, 5];
  // map cria um NOVO array com cada número dobrado
  const dobrados = numeros.map((n) => n * 2);
  return (
    <pre>
      {`Original: [${numeros.join(", ")}]
Dobrados: [${dobrados.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex01;
