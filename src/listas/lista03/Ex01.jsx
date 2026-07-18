// Exercício 1 — Componente Titulo
// Componente reutilizável: recebe a prop "texto" já desestruturada { texto }
function Titulo({ texto }) {
  // Exibe o texto recebido dentro de um <h1>
  return <h1>{texto}</h1>;
}

// Componente do exercício: demonstra o uso do Titulo
function Ex01() {
  // Passa a prop texto="..." como se fosse um atributo HTML
  return <Titulo texto="Aprendendo Props no React!" />;
}
// Exporta o componente do exercício
export default Ex01;
