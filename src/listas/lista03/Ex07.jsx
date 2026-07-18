// Exercício 7 — Componente Saudacao
// Recebe a prop "nome" e monta uma saudação
function Saudacao({ nome }) {
  // Exibe "Olá, [nome]!" interpolando a prop
  return <p>Olá, {nome}!</p>;
}

// Componente do exercício
function Ex07() {
  return (
    <div>
      {/* Saudações para pessoas diferentes com o mesmo componente */}
      <Saudacao nome="Maria" />
      <Saudacao nome="Pedro" />
    </div>
  );
}
// Exporta o componente do exercício
export default Ex07;
