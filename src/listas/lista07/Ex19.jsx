// Exercício 19 — Loja Virtual: ItemPedido
class ItemPedido {
  constructor(nome, quantidade, preco) {
    // Nome do produto
    this.nome = nome;
    // Quantas unidades foram pedidas
    this.quantidade = quantidade;
    // Preço de UMA unidade
    this.preco = preco;
  }
  // Total do item = quantidade × preço unitário
  calcularTotal() {
    return this.quantidade * this.preco;
  }
}

// Componente de demonstração
function Ex19() {
  // Dois itens de exemplo
  const item1 = new ItemPedido("Camiseta", 3, 49.9);
  const item2 = new ItemPedido("Boné", 2, 29.9);
  return (
    <pre>
      {`${item1.quantidade}x ${item1.nome} = R$ ${item1.calcularTotal().toFixed(2)}
${item2.quantidade}x ${item2.nome} = R$ ${item2.calcularTotal().toFixed(2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex19;
