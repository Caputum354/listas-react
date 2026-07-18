// Exercício 30 — PaginaDinamica (página inteira montada via props)
// Monta layout + conteúdo apenas com os dados recebidos
function PaginaDinamica({ dados }) {
  return (
    <div>
      {/* Cabeçalho usando o título e subtítulo dos dados */}
      <header style={{ background: "#1e293b", color: "#fff", padding: 16, borderRadius: "8px 8px 0 0" }}>
        <h2>{dados.titulo}</h2>
        <p>{dados.subtitulo}</p>
      </header>
      {/* Corpo: uma seção para cada item do array "secoes" */}
      <main style={{ padding: 16, border: "1px solid #e2e8f0" }}>
        {dados.secoes.map((secao) => (
          <section key={secao.titulo} style={{ marginBottom: 12 }}>
            {/* Título da seção */}
            <h3>{secao.titulo}</h3>
            {/* Texto da seção */}
            <p>{secao.texto}</p>
          </section>
        ))}
      </main>
      {/* Rodapé com o texto definido nos dados */}
      <footer style={{ background: "#e2e8f0", padding: 10, borderRadius: "0 0 8px 8px" }}>
        {dados.rodape}
      </footer>
    </div>
  );
}

// Componente do exercício
function Ex30() {
  // TODO o conteúdo da página vive neste objeto — o componente só "desenha"
  const dados = {
    titulo: "Portfólio do Caputum",
    subtitulo: "Desenvolvedor React em formação 🚀",
    secoes: [
      { titulo: "Sobre mim", texto: "Estudante de React resolvendo 15 listas de exercícios." },
      { titulo: "Projetos", texto: "Este projeto reúne 141 exercícios totalmente comentados." },
    ],
    rodape: "© 2026 — Feito com React",
  };
  return <PaginaDinamica dados={dados} />;
}
// Exporta o componente do exercício
export default Ex30;
