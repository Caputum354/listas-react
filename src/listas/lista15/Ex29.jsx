// Exercício 29 — Dados incompletos com valores padrão
function Ex29() {
  // Alguns usuários NÃO têm o campo telefone
  const usuarios = [
    { nome: "Ana", telefone: "9999-1111" },
    { nome: "Bruno" },                      // sem telefone!
    { nome: "Carla", telefone: "9999-3333" },
  ];
  // O padrão 'telefone = "Não informado"' entra em ação
  // apenas quando a propriedade não existe (undefined)
  const listaSegura = usuarios.map(({ nome, telefone = "Não informado" }) => `${nome}: ${telefone}`);
  return <pre>{listaSegura.join("\n")}</pre>;
}
// Exporta o componente
export default Ex29;
