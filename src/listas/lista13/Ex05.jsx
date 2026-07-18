// Exercício 5 — Desestruturação de objeto
function Ex05() {
  // Objeto pessoa
  const pessoa = { nome: "Ana", idade: 25 };
  // Na desestruturação de OBJETO usamos o NOME da propriedade
  // (diferente do array, que usa a posição)
  const { nome } = pessoa;
  return (
    <pre>
      {`Objeto: ${JSON.stringify(pessoa)}
Extraído: nome = ${nome}`}
    </pre>
  );
}
// Exporta o componente
export default Ex05;
