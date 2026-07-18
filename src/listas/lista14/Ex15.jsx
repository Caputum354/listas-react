// Exercício 15 — Desestruturação aninhada
function Ex15() {
  // Objeto com outro objeto dentro (aninhado)
  const carro = { motor: { cavalos: 150 } };
  // "motor: { cavalos }" entra DENTRO de motor e extrai cavalos
  // — tudo em uma única linha
  const { motor: { cavalos } } = carro;
  return (
    <pre>
      {`Objeto: ${JSON.stringify(carro)}
Extraído: cavalos = ${cavalos}`}
    </pre>
  );
}
// Exporta o componente
export default Ex15;
