// Exercício 6 — Mostrar informações de uma pessoa
function Ex06() {
  // Nome da pessoa
  const nome = "Maria";
  // Idade da pessoa
  const idade = 30;
  // Profissão da pessoa
  const profissao = "Designer";
  // Retorna várias linhas: JSX exige UM elemento pai, aqui usamos <div>
  return (
    <div>
      {/* Cada <p> exibe uma informação interpolada */}
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}
// Exporta o componente
export default Ex06;
