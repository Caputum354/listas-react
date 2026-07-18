// Exercício 20 — Terceiro parâmetro do map (o array completo)
function Ex20() {
  // Array de números
  const numeros = [10, 20, 30, 40];
  // O map passa TRÊS argumentos: (item, índice, arrayCompleto).
  // Usamos o array completo para saber o total de itens
  const porcentagens = numeros.map((n, indice, array) => {
    // Soma todos os itens do array completo
    const total = array.reduce((soma, item) => soma + item, 0);
    // Calcula quanto % este número representa do total
    return `${n} representa ${((n / total) * 100).toFixed(1)}% do total`;
  });
  return <pre>{porcentagens.join("\n")}</pre>;
}
// Exporta o componente
export default Ex20;
