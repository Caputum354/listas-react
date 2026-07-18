// Exercício 19 — Validação com every
function Ex19() {
  // Dois arrays para comparar os resultados
  const todosPositivos = [1, 5, 9];
  const comNegativo = [1, -5, 9];
  // every retorna true somente se TODOS os itens passarem no teste
  const validar = (numeros) => numeros.every((n) => n > 0);
  return (
    <pre>
      {`[${todosPositivos.join(", ")}] todos positivos? ${validar(todosPositivos)}
[${comNegativo.join(", ")}] todos positivos? ${validar(comNegativo)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex19;
