// Exercício 4 — Componente Botao
// Recebe a prop "label" com o texto do botão
function Botao({ label }) {
  // Exibe o label dentro de um <button>
  return <button>{label}</button>;
}

// Componente do exercício
function Ex04() {
  return (
    <div>
      {/* Dois botões criados com o MESMO componente, labels diferentes */}
      <Botao label="Salvar" /> <Botao label="Cancelar" />
    </div>
  );
}
// Exporta o componente do exercício
export default Ex04;
