// Exercício 21 — Retorno implícito de objeto
function Ex21() {
  // PEGADINHA: (id, username) => { id, username } NÃO funciona,
  // pois as chaves { } seriam interpretadas como o CORPO da função.
  // Solução: envolver o objeto em parênteses ({ ... })
  const criarUsuario = (id, username) => ({ id, username });
  // Testa a função
  const usuario = criarUsuario(1, "caputum_dev");
  return (
    <pre>
      {`criarUsuario(1, "caputum_dev") retornou:
${JSON.stringify(usuario, null, 2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex21;
