// Exercício 7 — Números para strings com map
function Ex07() {
  // Array de números
  const numeros = [1, 2, 3];
  // String(n) converte cada número em texto
  const textos = numeros.map((n) => String(n));
  return (
    <pre>
      {`Números:  ${JSON.stringify(numeros)}  (tipo: ${typeof numeros[0]})
Strings:  ${JSON.stringify(textos)}  (tipo: ${typeof textos[0]})`}
    </pre>
  );
}
// Exporta o componente
export default Ex07;
