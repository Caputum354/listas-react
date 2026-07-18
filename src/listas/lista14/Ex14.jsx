// Exercício 14 — Map retornando objetos { valor, par }
function Ex14() {
  // Array de números
  const numeros = [1, 2, 3, 4];
  // Para cada número, retorna um objeto com o valor e se é par.
  // Parênteses em ({ ... }) para retorno implícito de objeto!
  const objetos = numeros.map((n) => ({ valor: n, par: n % 2 === 0 }));
  return <pre>{JSON.stringify(objetos, null, 2)}</pre>;
}
// Exporta o componente
export default Ex14;
