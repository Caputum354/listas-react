// Exercício 3 — Array de números
function Ex03() {
  // Array com três números
  const numeros = [10, 20, 30];
  // Exibe cada número acessando seu índice
  return (
    <div>
      {/* Índice 0 = primeiro número */}
      <p>Primeiro número: {numeros[0]}</p>
      {/* Índice 1 = segundo número */}
      <p>Segundo número: {numeros[1]}</p>
    </div>
  );
}
// Exporta o componente
export default Ex03;
