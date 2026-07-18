// Exercício 17 — Componente TabelaSimples
// Recebe uma lista de dados via props e renderiza as linhas
function TabelaSimples({ dados }) {
  return (
    // Tabela HTML com bordas colapsadas
    <table border="1" cellPadding="6" style={{ borderCollapse: "collapse" }}>
      {/* Cabeçalho fixo da tabela */}
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
      {/* Corpo: uma <tr> para cada item do array "dados" */}
      <tbody>
        {dados.map((pessoa) => (
          // key única exigida pelo React em listas
          <tr key={pessoa.nome}>
            {/* Célula com o nome */}
            <td>{pessoa.nome}</td>
            {/* Célula com a idade */}
            <td>{pessoa.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Componente do exercício
function Ex17() {
  // Array de objetos que será passado como prop para a tabela
  const pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 35 },
    { nome: "Carla", idade: 28 },
  ];
  // Passa o array inteiro pela prop "dados"
  return <TabelaSimples dados={pessoas} />;
}
// Exporta o componente do exercício
export default Ex17;
