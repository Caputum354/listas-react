// Exercício 21 — Carrinho de Compras (composição de classes)
// Classe Produto: representa UM item da loja
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

// Classe Carrinho: POSSUI um array de Produtos (composição)
class Carrinho {
  constructor() {
    // Começa vazio
    this.produtos = [];
  }
  // Adiciona um objeto Produto ao array
  adicionarProduto(produto) {
    this.produtos.push(produto);
  }
  // Soma o preço de todos os produtos usando reduce
  calcularTotal() {
    // total acumula a soma; p é o produto atual; começa em 0
    return this.produtos.reduce((total, p) => total + p.preco, 0);
  }
}

// Componente de demonstração
function Ex21() {
  // Cria o carrinho vazio
  const carrinho = new Carrinho();
  // Adiciona três produtos
  carrinho.adicionarProduto(new Produto("Notebook", 3500));
  carrinho.adicionarProduto(new Produto("Mouse", 90));
  carrinho.adicionarProduto(new Produto("Teclado", 200));
  return (
    <pre>
      {/* Lista os itens e mostra o total calculado */}
      {carrinho.produtos.map((p) => `• ${p.nome}: R$ ${p.preco}`).join("\n") +
        `\n\nTotal: R$ ${carrinho.calcularTotal()}`}
    </pre>
  );
}
// Exporta o componente
export default Ex21;
