// Exercício 22 — Merge de dois arrays pelo índice
function Ex22() {
  // Dois arrays paralelos: mesma posição = mesma pessoa
  const ids = [101, 102, 103];
  const nomes = ["Ana", "Bruno", "Carla"];
  // map sobre os ids; o ÍNDICE conecta com o array de nomes:
  // nomes[indice] busca o nome correspondente
  const usuarios = ids.map((id, indice) => ({ id, nome: nomes[indice] }));
  return (
    <pre>
      {`ids:   [${ids.join(", ")}]
nomes: [${nomes.join(", ")}]

Combinado:
${JSON.stringify(usuarios, null, 2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex22;
