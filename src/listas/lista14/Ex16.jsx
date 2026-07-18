// Exercício 16 — Transformação condicional no map
function Ex16() {
  // Array de idades variadas
  const idades = [12, 25, 17, 30, 8];
  // O ternário decide o texto de cada idade
  const classificacao = idades.map((idade) => (idade < 18 ? "Menor" : "Maior"));
  return (
    <pre>
      {`Idades:  [${idades.join(", ")}]
Textos:  [${classificacao.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex16;
