// Exercício 13 — Mostrar primeiro e último item
function Ex13() {
  // Array de linguagens de programação
  const linguagens = ["JavaScript", "Python", "Java", "C#"];
  // O último índice é sempre (length - 1), aqui 4 - 1 = 3
  const ultima = linguagens[linguagens.length - 1];
  // Exibe a primeira e a última linguagem
  return (
    <div>
      {/* Primeira posição do array */}
      <p>Primeira linguagem: {linguagens[0]}</p>
      {/* Última posição, calculada dinamicamente */}
      <p>Última linguagem: {ultima}</p>
    </div>
  );
}
// Exporta o componente
export default Ex13;
