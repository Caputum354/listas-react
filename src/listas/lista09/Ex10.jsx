// Exercício 10 — Comprimento de string
// .length conta quantos caracteres a string possui
const tamanho = (texto) => texto.length;

// Componente de demonstração
function Ex10() {
  return (
    <pre>
      {`tamanho("React") = ${tamanho("React")}
tamanho("JavaScript") = ${tamanho("JavaScript")}`}
    </pre>
  );
}
// Exporta o componente
export default Ex10;
