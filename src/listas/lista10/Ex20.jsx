// Exercício 20 — Objeto com sintaxe encurtada
function Ex20() {
  // Quando a variável tem o MESMO nome da propriedade, basta escrever
  // { nome, categoria } em vez de { nome: nome, categoria: categoria }.
  // Os parênteses em ({ ... }) evitam confundir o objeto com o corpo da função
  const criarProduto = (nome, categoria) => ({ nome, categoria });
  // Cria um objeto usando a função
  const produto = criarProduto("Notebook", "Eletrônicos");
  return (
    <pre>
      {/* JSON.stringify converte o objeto em texto formatado (indentação 2) */}
      {JSON.stringify(produto, null, 2)}
    </pre>
  );
}
// Exporta o componente
export default Ex20;
