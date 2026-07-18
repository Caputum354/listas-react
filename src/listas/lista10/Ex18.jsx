// Exercício 18 — Verificar existência com some
function Ex18() {
  // Lista de nomes de usuários
  const nomes = ["Ana", "Admin", "Bruno"];
  // some retorna true se PELO MENOS UM item passar no teste
  const temAdmin = nomes.some((nome) => nome === "Admin");
  return (
    <pre>
      {`Nomes: [${nomes.join(", ")}]
Existe "Admin"? ${temAdmin}`}
    </pre>
  );
}
// Exporta o componente
export default Ex18;
