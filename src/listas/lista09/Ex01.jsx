// Exercício 1 — Converter function para arrow function
// ANTES (função tradicional):
// function dobro(n) { return n * 2 }
// DEPOIS (arrow function): parâmetro => retorno implícito
const dobro = (n) => n * 2;

// Componente de demonstração
function Ex01() {
  return (
    <pre>
      {`dobro(5) = ${dobro(5)}
dobro(21) = ${dobro(21)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex01;
