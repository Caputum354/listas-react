// Exercício 20 — Componente Layout (Header + Main + Footer)
// Header: recebe o título do site
function Header({ titulo }) {
  return <header style={{ background: "#0ea5e9", color: "#fff", padding: 10 }}>{titulo}</header>;
}

// Main: recebe o conteúdo principal da página
function Main({ conteudo }) {
  return <main style={{ padding: 10 }}>{conteudo}</main>;
}

// Footer: recebe o ano do rodapé
function Footer({ ano }) {
  return <footer style={{ background: "#e2e8f0", padding: 10 }}>© {ano} — Todos os direitos reservados</footer>;
}

// Layout: monta a página usando os três componentes, cada um com sua prop
function Layout() {
  return (
    <div>
      {/* Cabeçalho com o título */}
      <Header titulo="Meu Site em React" />
      {/* Conteúdo central */}
      <Main conteudo="Bem-vindo! Esta página foi montada com Header, Main e Footer." />
      {/* Rodapé com o ano */}
      <Footer ano={2026} />
    </div>
  );
}

// Componente do exercício
function Ex20() {
  return <Layout />;
}
// Exporta o componente do exercício
export default Ex20;
