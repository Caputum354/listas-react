// Exercício 27 — Desestruturação com alias dentro do map
function Ex27() {
  // Array de objetos com nomes de propriedade "feios" (de uma API)
  const registros = [
    { usr_nm: "ana_dev", usr_pts: 1200 },
    { usr_nm: "bruno_js", usr_pts: 850 },
  ];
  // No parâmetro do map, desestrutura RENOMEANDO:
  // usr_nm vira "nome" e usr_pts vira "pontos"
  const legivel = registros.map(({ usr_nm: nome, usr_pts: pontos }) => `${nome} tem ${pontos} pontos`);
  return <pre>{legivel.join("\n")}</pre>;
}
// Exporta o componente
export default Ex27;
