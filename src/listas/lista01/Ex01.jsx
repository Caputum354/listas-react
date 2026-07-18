// Exercício 1 — Mostrar uma variável na tela
function Ex01() {
  // Cria a variável "nome" com um valor de texto (string)
  const nome = "João";
  // Retorna o JSX que será exibido na tela
  return (
    // As chaves {} "interpolam" o valor da variável dentro do texto
    <p>Olá, meu nome é {nome}</p>
  );
}
// Exporta o componente para ser usado em outros arquivos
export default Ex01;
