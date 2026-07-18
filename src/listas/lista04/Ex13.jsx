// Exercício 13 — Lista de Usuários
// Componente Usuario: exibe os dados de UMA pessoa
function Usuario({ nome, idade }) {
  return (
    <p>
      {/* Nome e idade na mesma linha */}
      👤 {nome} — {idade} anos
    </p>
  );
}

// Componente ListaUsuarios: renderiza VÁRIOS Usuario com props diferentes
function ListaUsuarios() {
  return (
    <div>
      {/* Cada linha é uma instância independente do componente Usuario */}
      <Usuario nome="Ana" idade={22} />
      <Usuario nome="Bruno" idade={35} />
      <Usuario nome="Carla" idade={28} />
    </div>
  );
}

// Componente do exercício
function Ex13() {
  // Renderiza a lista completa
  return <ListaUsuarios />;
}
// Exporta o componente do exercício
export default Ex13;
