// Exercício 12 — Nomes em maiúsculo com map
function Ex12() {
  // Array de nomes em formato normal
  const nomes = ["ana", "bruno", "carla"];
  // map cria um NOVO array aplicando toUpperCase() em cada nome
  const maiusculos = nomes.map((nome) => nome.toUpperCase());
  return (
    <pre>
      {`Original:   [${nomes.join(", ")}]
Maiúsculos: [${maiusculos.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex12;
