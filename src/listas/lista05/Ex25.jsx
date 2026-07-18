// Exercício 25 — TabelaGenerica (colunas e dados dinâmicos)
// Recebe "colunas" (nomes das colunas) e "dados" (array de objetos)
function TabelaGenerica({ colunas, dados }) {
  return (
    <table border="1" cellPadding="6" style={{ borderCollapse: "collapse" }}>
      {/* Cabeçalho gerado dinamicamente a partir do array "colunas" */}
      <thead>
        <tr>
          {colunas.map((coluna) => (
            // Uma célula de cabeçalho para cada coluna
            <th key={coluna}>{coluna}</th>
          ))}
        </tr>
      </thead>
      {/* Corpo: para cada linha de dados... */}
      <tbody>
        {dados.map((linha, indice) => (
          <tr key={indice}>
            {/* ...gera uma célula para cada coluna, buscando linha[coluna] */}
            {colunas.map((coluna) => (
              <td key={coluna}>{linha[coluna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Componente do exercício
function Ex25() {
  // As chaves dos objetos DEVEM bater com os nomes das colunas
  const colunas = ["produto", "preco", "estoque"];
  const dados = [
    { produto: "Notebook", preco: "R$ 3500", estoque: 12 },
    { produto: "Mouse", preco: "R$ 90", estoque: 40 },
  ];
  // A MESMA tabela serve para qualquer combinação de colunas/dados
  return <TabelaGenerica colunas={colunas} dados={dados} />;
}
// Exporta o componente do exercício
export default Ex25;
