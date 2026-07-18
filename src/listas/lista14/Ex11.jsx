// Exercício 11 — Renomeando variáveis na desestruturação
function Ex11() {
  // Objeto original com a propriedade "title"
  const curso = { id: 1, title: "JS" };
  // A sintaxe "title: tituloCurso" extrai "title" mas guarda
  // o valor em uma variável chamada "tituloCurso" (alias)
  const { title: tituloCurso } = curso;
  return (
    <pre>
      {`Objeto: ${JSON.stringify(curso)}
Variável renomeada: tituloCurso = "${tituloCurso}"`}
    </pre>
  );
}
// Exporta o componente
export default Ex11;
