// Exercício 18 — Componente Aluno (condicional via props)
// Recebe nome e nota; decide o status conforme a nota
function Aluno({ nome, nota }) {
  // Operador ternário: nota >= 7 ? "se sim" : "se não"
  const status = nota >= 7 ? "Aprovado ✅" : "Reprovado ❌";
  return (
    <p>
      {/* Exibe nome, nota e o status calculado */}
      {nome} — nota {nota}: <strong>{status}</strong>
    </p>
  );
}

// Componente do exercício
function Ex18() {
  return (
    <div>
      {/* Um aluno aprovado (nota >= 7) */}
      <Aluno nome="Ana" nota={8.5} />
      {/* Um aluno reprovado (nota < 7) */}
      <Aluno nome="Bruno" nota={5} />
    </div>
  );
}
// Exporta o componente do exercício
export default Ex18;
