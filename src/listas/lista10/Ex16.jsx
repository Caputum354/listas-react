// Exercício 16 — Filtrar intervalo (maiores que 10 E menores que 50)
function Ex16() {
  // Array com valores variados
  const numeros = [5, 12, 49, 50, 8, 30, 100];
  // && exige que as DUAS condições sejam verdadeiras ao mesmo tempo
  const filtrados = numeros.filter((n) => n > 10 && n < 50);
  return (
    <pre>
      {`Original:        [${numeros.join(", ")}]
Entre 10 e 50:   [${filtrados.join(", ")}]`}
    </pre>
  );
}
// Exporta o componente
export default Ex16;
