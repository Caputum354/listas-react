// Exercício 3 — Desestruturação simples de array
function Ex03() {
  // Array com duas frutas
  const frutas = ["Maçã", "Banana"];
  // A desestruturação atribui pela POSIÇÃO:
  // f1 recebe o índice 0 e f2 recebe o índice 1
  const [f1, f2] = frutas;
  return (
    <pre>
      {`f1 = ${f1}
f2 = ${f2}`}
    </pre>
  );
}
// Exporta o componente
export default Ex03;
