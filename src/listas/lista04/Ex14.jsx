// Exercício 14 — Componente Post
// Recebe titulo, autor e conteudo, como um post de blog
function Post({ titulo, autor, conteudo }) {
  return (
    // <article> é a tag semântica correta para posts
    <article>
      {/* Título do post */}
      <h3>{titulo}</h3>
      {/* Autor em itálico */}
      <p><em>por {autor}</em></p>
      {/* Corpo do post */}
      <p>{conteudo}</p>
    </article>
  );
}

// Componente do exercício
function Ex14() {
  return (
    <Post
      titulo="Aprendendo Props"
      autor="Caputum"
      conteudo="Props são a forma de passar dados de um componente pai para um componente filho."
    />
  );
}
// Exporta o componente do exercício
export default Ex14;
