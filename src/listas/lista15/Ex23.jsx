// Exercício 23 — Desestruturação com chave dinâmica
function Ex23() {
  // Objeto com várias propriedades
  const produto = { nome: "Notebook", preco: 3500, marca: "Dell" };
  // A propriedade desejada está em uma VARIÁVEL
  const chave = "marca";
  // [chave] usa o VALOR da variável como nome da propriedade,
  // e ": valorExtraido" dá um nome fixo à nova variável
  const { [chave]: valorExtraido } = produto;
  return (
    <pre>
      {`chave = "${chave}"
Extraído dinamicamente: ${valorExtraido}`}
    </pre>
  );
}
// Exporta o componente
export default Ex23;
