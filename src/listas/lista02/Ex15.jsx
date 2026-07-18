// Exercício 15 — Mini lista de tarefas
function Ex15() {
  // Array com as tarefas do dia
  const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"];
  // Renderiza a lista completa
  return (
    <div>
      {/* Título da lista */}
      <h3>Minhas tarefas hoje:</h3>
      {/* .map() percorre o array e gera um <p> para cada tarefa.
          "tarefa" é o item atual e "indice" é a posição (0, 1, 2...) */}
      {tarefas.map((tarefa, indice) => (
        // key: identificador único que o React exige em listas
        <p key={tarefa}>
          {/* indice + 1 transforma 0,1,2 em 1,2,3 */}
          {indice + 1} - {tarefa}
        </p>
      ))}
    </div>
  );
}
// Exporta o componente
export default Ex15;
