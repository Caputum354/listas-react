// Exercício 6 — Maioridade com operador ternário
// condição ? valorSeVerdadeiro : valorSeFalso — tudo em uma linha
const verificarIdade = (idade) => (idade >= 18 ? "Maior de idade" : "Menor de idade");

// Componente de demonstração
function Ex06() {
  return (
    <pre>
      {`verificarIdade(21) = ${verificarIdade(21)}
verificarIdade(15) = ${verificarIdade(15)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex06;
