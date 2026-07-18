// Exercício 15 — Criar um mini "perfil"
function Ex15() {
  // Nome da pessoa do perfil
  const nome = "Ana";
  // Idade da pessoa
  const idade = 22;
  // Hobby favorito
  const hobby = "Jogar videogame";
  // Retorna o perfil completo com título e três linhas de dados
  return (
    <div>
      {/* Título da seção de perfil */}
      <h3>Perfil</h3>
      {/* Linha com o nome */}
      <p>Nome: {nome}</p>
      {/* Linha com a idade */}
      <p>Idade: {idade}</p>
      {/* Linha com o hobby */}
      <p>Hobby: {hobby}</p>
    </div>
  );
}
// Exporta o componente
export default Ex15;
