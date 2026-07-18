// Exercício 27 — Contador de ocorrências com reduce
function Ex27() {
  // Array com categorias repetidas
  const categorias = ["eletronicos", "casa", "eletronicos", "casa", "livros", "eletronicos"];
  // reduce constrói um OBJETO contador:
  // contagem = acumulador (começa como {}), categoria = item atual
  const ocorrencias = categorias.reduce((contagem, categoria) => {
    // Se a categoria já existe soma 1; senão, começa em 1.
    // (contagem[categoria] || 0) devolve 0 quando ainda não existe
    contagem[categoria] = (contagem[categoria] || 0) + 1;
    // Retorna o acumulador para a próxima iteração
    return contagem;
  }, {});
  return (
    <pre>
      {`Array: [${categorias.join(", ")}]

Contagem:
${JSON.stringify(ocorrencias, null, 2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex27;
