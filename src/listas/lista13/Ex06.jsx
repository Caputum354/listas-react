// Exercício 6 — Segundo parâmetro do map (índice)
function Ex06() {
  // Array de valores
  const valores = ["React", "Vue", "Angular"];
  // O map passa DOIS argumentos à arrow: (item, índice)
  const linhas = valores.map((valor, indice) => `Índice ${indice}: Valor ${valor}`);
  return <pre>{linhas.join("\n")}</pre>;
}
// Exporta o componente
export default Ex06;
