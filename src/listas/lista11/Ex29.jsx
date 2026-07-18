// Exercício 29 — Média de notas por aluno
function Ex29() {
  // Cada aluno tem um ARRAY de notas
  const alunos = [
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "Bruno", notas: [5, 6, 7] },
    { nome: "Carla", notas: [10, 9, 9.5] },
  ];
  // map externo: transforma cada aluno em { nome, media }
  const resultado = alunos.map((aluno) => {
    // reduce interno: soma todas as notas do aluno
    const somaDasNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
    // Divide pela quantidade de notas para obter a média
    const media = somaDasNotas / aluno.notas.length;
    // Retorna o novo objeto com a média arredondada (2 casas)
    return { nome: aluno.nome, media: media.toFixed(2) };
  });
  return <pre>{JSON.stringify(resultado, null, 2)}</pre>;
}
// Exporta o componente
export default Ex29;
