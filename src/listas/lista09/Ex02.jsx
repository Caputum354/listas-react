// Exercício 2 — Saudação fixa sem parâmetros
// Sem parâmetros usamos parênteses vazios ()
const saudacao = () => "Olá, Mundo!";

// Componente de demonstração
function Ex02() {
  // Chama a arrow function e exibe o retorno
  return <pre>{saudacao()}</pre>;
}
// Exporta o componente
export default Ex02;
