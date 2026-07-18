// Exercício 18 — Desconto de 10% mantendo o objeto completo
function Ex18() {
  // Lista de produtos original
  const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 90 },
  ];
  // O spread (...produto) COPIA todas as propriedades do objeto,
  // e depois "preco" é sobrescrito com o valor com desconto.
  // Assim retornamos o objeto COMPLETO atualizado, sem mutar o original
  const comDesconto = produtos.map((produto) => ({
    ...produto,
    preco: produto.preco * 0.9,
  }));
  return (
    <pre>
      {`Original:
${JSON.stringify(produtos, null, 2)}

Com 10% de desconto:
${JSON.stringify(comDesconto, null, 2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex18;
