// Exercício 25 — Gerador de multiplicador (closure)
function Ex25() {
  // Arrow que RETORNA outra arrow: x fica "guardado" na closure
  const multiplicador = (x) => (y) => x * y;
  // Cria funções especializadas a partir da genérica
  const triplicar = multiplicador(3);  // x = 3 fixado
  const dezVezes = multiplicador(10);  // x = 10 fixado
  return (
    <pre>
      {`triplicar(7)  = ${triplicar(7)}
dezVezes(4.5) = ${dezVezes(4.5)}
multiplicador(2)(8) = ${multiplicador(2)(8)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex25;
