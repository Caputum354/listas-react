// Exercício 13 — Busca de usuário com find
function Ex13() {
  // Array de objetos com id e nome
  const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" },
  ];
  // find retorna o PRIMEIRO item em que a condição é true (ou undefined)
  const usuario = usuarios.find((u) => u.id === 3);
  return (
    <pre>
      {`Buscando id === 3...
Encontrado: ${usuario.nome} (id ${usuario.id})`}
    </pre>
  );
}
// Exporta o componente
export default Ex13;
