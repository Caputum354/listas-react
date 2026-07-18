// Exercício 8 — Template String em arrow function
// Template strings usam crase e ${} para interpolar variáveis
const apresentar = (nome, idade) => `Olá, meu nome é ${nome} e tenho ${idade} anos`;

// Componente de demonstração
function Ex08() {
  return (
    <pre>
      {`${apresentar("Caputum", 25)}
${apresentar("Ana", 30)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex08;
