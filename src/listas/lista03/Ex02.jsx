// Exercício 2 — Componente Paragrafo
// Recebe a prop "conteudo" e exibe dentro de um <p>
function Paragrafo({ conteudo }) {
  // Interpola o conteúdo recebido no parágrafo
  return <p>{conteudo}</p>;
}

// Componente do exercício
function Ex02() {
  // Usa o Paragrafo duas vezes com conteúdos diferentes (reutilização!)
  return (
    <div>
      {/* Primeira instância do componente */}
      <Paragrafo conteudo="Props tornam os componentes reutilizáveis." />
      {/* Segunda instância com outro texto */}
      <Paragrafo conteudo="O mesmo componente, com conteúdo diferente." />
    </div>
  );
}
// Exporta o componente do exercício
export default Ex02;
