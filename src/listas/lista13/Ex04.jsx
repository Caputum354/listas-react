// Exercício 4 — Troca de variáveis sem temporária
function Ex04() {
  // Valores iniciais
  let a = 1;
  let b = 2;
  // [a, b] = [b, a] cria um array com os valores invertidos
  // e desestrutura de volta — troca em UMA linha, sem variável auxiliar
  [a, b] = [b, a];
  return (
    <pre>
      {`Antes:  a = 1, b = 2
Depois: a = ${a}, b = ${b}`}
    </pre>
  );
}
// Exporta o componente
export default Ex04;
