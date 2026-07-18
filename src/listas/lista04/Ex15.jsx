// Exercício 15 — Componente Comentario + ListaComentarios
// Comentario: exibe UM comentário com autor e mensagem
function Comentario({ autor, mensagem }) {
  return (
    <div style={{ borderLeft: "3px solid #0ea5e9", paddingLeft: 10, marginBottom: 8 }}>
      {/* Autor em negrito */}
      <p><strong>{autor}</strong></p>
      {/* Texto do comentário */}
      <p>{mensagem}</p>
    </div>
  );
}

// ListaComentarios: agrupa vários Comentario
function ListaComentarios() {
  return (
    <div>
      {/* Três comentários usando o mesmo componente */}
      <Comentario autor="Ana" mensagem="Ótimo artigo, aprendi muito!" />
      <Comentario autor="Bruno" mensagem="Poderia dar mais exemplos de props?" />
      <Comentario autor="Carla" mensagem="Salvei nos favoritos. 👏" />
    </div>
  );
}

// Componente do exercício
function Ex15() {
  return <ListaComentarios />;
}
// Exporta o componente do exercício
export default Ex15;
