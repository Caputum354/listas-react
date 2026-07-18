// Exercício 22 — Filtro de alunos aprovados
function Ex22() {
  // Array de alunos com nome e nota
  const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5.5 },
    { nome: "Carla", nota: 7 },
    { nome: "Daniel", nota: 4 },
  ];
  // Encadeia dois métodos:
  // 1) filter: mantém só quem tem nota >= 7
  // 2) map: extrai apenas o nome de cada aprovado
  const aprovados = alunos.filter((a) => a.nota >= 7).map((a) => a.nome);
  return (
    <pre>
      {`Todos: ${alunos.map((a) => `${a.nome}(${a.nota})`).join(", ")}
Aprovados (nota >= 7): [${aprovados.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex22;
