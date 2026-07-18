// Exercício 13 — Desestruturação nos parâmetros da função
function Ex13() {
  // A desestruturação acontece DIRETO nos parênteses da função:
  // em vez de receber "usuario" e acessar usuario.nome,
  // já extraímos { nome, email } na assinatura
  const exibirUsuario = ({ nome, email }) => `Usuário: ${nome} | E-mail: ${email}`;
  // Objeto com mais propriedades do que o necessário
  const usuario = { nome: "Caputum", email: "caputum@email.com", idade: 25 };
  // A função ignora automaticamente o que não desestruturou
  return <pre>{exibirUsuario(usuario)}</pre>;
}
// Exporta o componente
export default Ex13;
