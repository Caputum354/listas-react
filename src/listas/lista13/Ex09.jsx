// Exercício 9 — Desestruturação com valor padrão
function Ex09() {
  // Objeto VAZIO: não tem a propriedade "cor"
  const objetoVazio = {};
  // O "= 'preto'" só é usado se a propriedade não existir (undefined)
  const { cor = "preto" } = objetoVazio;
  // Aqui a propriedade existe, então o padrão é IGNORADO
  const { cor: corDoCarro = "preto" } = { cor: "vermelho" };
  return (
    <pre>
      {`De {} -> cor = "${cor}" (usou o padrão)
De {cor: "vermelho"} -> cor = "${corDoCarro}" (ignorou o padrão)`}
    </pre>
  );
}
// Exporta o componente
export default Ex09;
