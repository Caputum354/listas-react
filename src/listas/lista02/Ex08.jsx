// Exercício 8 — Criar lista de cores
function Ex08() {
  // Array com as cores favoritas
  const cores = ["Azul", "Vermelho", "Verde"];
  // Monta a frase acessando cada cor pelo índice
  return (
    <p>
      Minhas cores favoritas são: {cores[0]}, {cores[1]} e {cores[2]}
    </p>
  );
}
// Exporta o componente
export default Ex08;
