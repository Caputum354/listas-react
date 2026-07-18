// Exercício 2 — Primeira letra maiúscula
function Ex02() {
  // Nomes todos em minúsculo
  const nomes = ["ana", "bruno", "carla"];
  // Para cada nome: charAt(0) pega a 1ª letra, toUpperCase() a torna
  // maiúscula, e slice(1) devolve o restante da palavra
  const proprios = nomes.map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1));
  return (
    <pre>
      {`Antes:  [${nomes.join(", ")}]
Depois: [${proprios.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex02;
