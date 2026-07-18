// Exercício 24 — Sistema de notas com média
function Ex24() {
  // Alunos com arrays de notas
  const alunos = [
    { nome: "Ana", notas: [8, 9, 10] },
    { nome: "Bruno", notas: [5, 6, 4] },
  ];
  // Desestrutura { nome, notas } direto no parâmetro do map
  const boletim = alunos.map(({ nome, notas }) => {
    // Soma as notas com reduce e divide pelo total
    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
    // Retorna o novo objeto com a média calculada
    return { nome, media: Number(media.toFixed(2)) };
  });
  return <pre>{JSON.stringify(boletim, null, 2)}</pre>;
}
// Exporta o componente
export default Ex24;
