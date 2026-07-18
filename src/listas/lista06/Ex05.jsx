// Exercício 5 — Produto com aplicarDesconto()
class Produto {
  constructor(nome, preco) {
    // Nome e preço original do produto
    this.nome = nome;
    this.preco = preco;
  }
  // Altera o preço aplicando a porcentagem de desconto
  aplicarDesconto(porcentagem) {
    // Ex: 20% -> preco * (1 - 20/100) = preco * 0.8
    this.preco = this.preco * (1 - porcentagem / 100);
  }
}

// Componente de demonstração
function Ex05() {
  // Produto de R$ 100
  const produto = new Produto("Fone Bluetooth", 100);
  // Guarda o preço antes do desconto para comparar
  const precoOriginal = produto.preco;
  // Aplica 20% de desconto (altera o atributo do objeto)
  produto.aplicarDesconto(20);
  return (
    <pre>
      {`Produto: ${produto.nome}
Preço original: R$ ${precoOriginal.toFixed(2)}
Com 20% de desconto: R$ ${produto.preco.toFixed(2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex05;
