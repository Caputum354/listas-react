// Exercício único — Desafio: Classe Loja + Arrow Function
// Mistura os dois conhecimentos: POO (classes) e Arrow Functions

// Classe Produto: cada produto sabe se está em promoção
class Produto {
  constructor(nome, preco, emPromocao) {
    this.nome = nome;             // nome do produto
    this.preco = preco;           // preço em reais
    this.emPromocao = emPromocao; // true se está em promoção
  }
}

// Classe Loja: possui um ARRAY de Produtos
class Loja {
  constructor(nome) {
    this.nome = nome;
    // Acervo de produtos da loja
    this.produtos = [];
  }
  // Adiciona um produto ao array
  adicionarProduto(produto) {
    this.produtos.push(produto);
  }
  // AQUI está o desafio: usar uma ARROW FUNCTION dentro de um
  // método da classe para filtrar os produtos em promoção.
  // A arrow (p) => p.emPromocao herda o "this" do método,
  // então this.produtos funciona sem problemas.
  listarPromocoes() {
    return this.produtos.filter((p) => p.emPromocao);
  }
}

// Componente de demonstração
function Ex01() {
  // Cria a loja
  const loja = new Loja("TechStore");
  // Cadastra produtos: alguns em promoção, outros não
  loja.adicionarProduto(new Produto("Notebook", 3500, false));
  loja.adicionarProduto(new Produto("Mouse Gamer", 89.9, true));
  loja.adicionarProduto(new Produto("Monitor", 1200, true));
  loja.adicionarProduto(new Produto("Webcam", 250, false));
  // Usa o método com a arrow function
  const promocoes = loja.listarPromocoes();
  return (
    <pre>
      {`Loja: ${loja.nome} (${loja.produtos.length} produtos)

🔥 Em promoção:
` + promocoes.map((p) => `• ${p.nome} — R$ ${p.preco}`).join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex01;
