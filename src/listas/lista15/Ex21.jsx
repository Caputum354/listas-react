// Exercício 21 — HTML Generator (objetos -> tags <a>)
function Ex21() {
  // Array de objetos Link com texto e url
  const links = [
    { texto: "Google", url: "https://google.com" },
    { texto: "GitHub", url: "https://github.com" },
    { texto: "React", url: "https://react.dev" },
  ];
  // map + desestruturação: gera a STRING da tag <a> de cada link
  const tags = links.map(({ texto, url }) => `<a href="${url}">${texto}</a>`);
  return (
    <pre>
      {`Strings HTML geradas:
${tags.join("\n")}`}
    </pre>
  );
}
// Exporta o componente
export default Ex21;
