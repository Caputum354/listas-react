// Exercício 8 — Extrair propriedade de objetos
function Ex08() {
  // Array de objetos com nome e população
  const cidades = [
    { nome: "São Paulo", populacao: 12300000 },
    { nome: "Rio de Janeiro", populacao: 6700000 },
    { nome: "Curitiba", populacao: 1960000 },
  ];
  // map + desestruturação no parâmetro: pega só o "nome" de cada cidade
  const nomes = cidades.map(({ nome }) => nome);
  return (
    <pre>
      {`Nomes das cidades:
[${nomes.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex08;
