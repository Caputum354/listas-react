// Exercício 5 — Array de nomes
function Ex05() {
  // Array com os nomes dos alunos
  const nomes = ["Ana", "Carlos", "João"];
  // Exibe cada aluno em uma linha, numerando a partir de 1
  return (
    <div>
      {/* Aluno 1 está no índice 0 */}
      <p>Aluno 1: {nomes[0]}</p>
      {/* Aluno 2 está no índice 1 */}
      <p>Aluno 2: {nomes[1]}</p>
      {/* Aluno 3 está no índice 2 */}
      <p>Aluno 3: {nomes[2]}</p>
    </div>
  );
}
// Exporta o componente
export default Ex05;
