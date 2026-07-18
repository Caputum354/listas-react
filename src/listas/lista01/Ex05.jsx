// Exercício 5 — Criar uma variável booleana
function Ex05() {
  // Variável booleana (true ou false)
  const estudandoReact = true;
  // Atenção: o JSX NÃO exibe booleanos diretamente,
  // por isso usamos String() para converter true -> "true"
  return <p>Estou estudando React: {String(estudandoReact)}</p>;
}
// Exporta o componente
export default Ex05;
