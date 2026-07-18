// Exercício 19 — Componente Menu
// Recebe uma lista de itens via props e renderiza links
function Menu({ itens }) {
  return (
    // <nav> é a tag semântica para menus de navegação
    <nav>
      {/* Percorre o array de itens gerando um link para cada um */}
      {itens.map((item) => (
        // key única + href do item; marginRight separa os links
        <a key={item.texto} href={item.url} style={{ marginRight: 12 }}>
          {/* Texto visível do link */}
          {item.texto}
        </a>
      ))}
    </nav>
  );
}

// Componente do exercício
function Ex19() {
  // Array de objetos com texto e url de cada item do menu
  const itensDoMenu = [
    { texto: "Início", url: "#inicio" },
    { texto: "Sobre", url: "#sobre" },
    { texto: "Contato", url: "#contato" },
  ];
  // Passa o array pela prop "itens"
  return <Menu itens={itensDoMenu} />;
}
// Exporta o componente do exercício
export default Ex19;
