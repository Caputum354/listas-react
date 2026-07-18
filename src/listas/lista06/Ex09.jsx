// Exercício 9 — Filme com mais de 10 anos?
class Filme {
  constructor(titulo, anoLancamento) {
    // Título e ano de lançamento do filme
    this.titulo = titulo;
    this.anoLancamento = anoLancamento;
  }
  // Verifica se o filme tem mais de 10 anos
  ehAntigo() {
    // Ano atual fixo do exercício
    const anoAtual = 2026;
    // Retorna true se a diferença passar de 10 anos
    return anoAtual - this.anoLancamento > 10;
  }
}

// Componente de demonstração
function Ex09() {
  // Um filme antigo e um recente para comparar
  const matrix = new Filme("Matrix", 1999);
  const barbie = new Filme("Barbie", 2023);
  return (
    <pre>
      {`${matrix.titulo} (${matrix.anoLancamento}) tem mais de 10 anos? ${matrix.ehAntigo() ? "Sim" : "Não"}
${barbie.titulo} (${barbie.anoLancamento}) tem mais de 10 anos? ${barbie.ehAntigo() ? "Sim" : "Não"}`}
    </pre>
  );
}
// Exporta o componente
export default Ex09;
