// Exercício 14 — Cálculo de imposto (+15%) com map
function Ex14() {
  // Preços originais
  const precos = [100, 200, 50];
  // map multiplica cada preço por 1.15 (aumento de 15%)
  const comImposto = precos.map((preco) => preco * 1.15);
  return (
    <pre>
      {`Sem imposto: [${precos.join(", ")}]
Com 15%:     [${comImposto.map((p) => p.toFixed(2)).join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex14;
