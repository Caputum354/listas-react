// Exercício 5 — Componente Usuario
// Recebe "nome" e "idade" como props
function Usuario({ nome, idade }) {
  return (
    <div>
      {/* Linha com o nome recebido */}
      <p>Nome: {nome}</p>
      {/* Linha com a idade recebida */}
      <p>Idade: {idade}</p>
    </div>
  );
}

// Componente do exercício
function Ex05() {
  // Passa nome como string e idade como número (chaves = valor JS)
  return <Usuario nome="João" idade={20} />;
}
// Exporta o componente do exercício
export default Ex05;
