// Exercício 18 — Escola: Usuario, Professor e Aluno
// Classe base para qualquer usuário do sistema
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}

// Professor tem o método específico lancarNota()
class Professor extends Usuario {
  lancarNota(aluno, nota) {
    return `Professor ${this.nome} lançou nota ${nota} para ${aluno}`;
  }
}

// Aluno tem o método específico entregarTrabalho()
class Aluno extends Usuario {
  entregarTrabalho(titulo) {
    return `Aluno ${this.nome} entregou o trabalho "${titulo}"`;
  }
}

// Componente de demonstração
function Ex18() {
  // Cria um professor e um aluno
  const professor = new Professor("Carlos");
  const aluno = new Aluno("Julia");
  // Cada um usa seu método exclusivo
  return (
    <pre>
      {`${aluno.entregarTrabalho("Introdução ao React")}
${professor.lancarNota("Julia", 9.5)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex18;
