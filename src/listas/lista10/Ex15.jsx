// Exercício 15 — Contagem de caracteres com map
function Ex15() {
  // Array de palavras
  const palavras = ["React", "JS", "JavaScript"];
  // map transforma cada palavra no seu tamanho (.length)
  const tamanhos = palavras.map((palavra) => palavra.length);
  return (
    <pre>
      {`Palavras: [${palavras.join(", ")}]
Tamanhos: [${tamanhos.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex15;
