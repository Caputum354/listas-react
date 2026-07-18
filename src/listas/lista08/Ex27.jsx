// Exercício 27 — Agenda de Contatos com exclusão
// Contato individual
class Contato {
  constructor(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
  }
}

// Agenda gerencia os contatos
class Agenda {
  constructor() {
    this.contatos = [];
  }
  // Adiciona um contato
  adicionar(contato) {
    this.contatos.push(contato);
  }
  // Exclui pelo nome: mantém apenas quem tem nome DIFERENTE
  excluir(nome) {
    this.contatos = this.contatos.filter((c) => c.nome !== nome);
  }
}

// Componente de demonstração
function Ex27() {
  // Agenda com três contatos
  const agenda = new Agenda();
  agenda.adicionar(new Contato("Ana", "1111-1111"));
  agenda.adicionar(new Contato("Bruno", "2222-2222"));
  agenda.adicionar(new Contato("Carla", "3333-3333"));
  // Exclui o Bruno
  agenda.excluir("Bruno");
  return (
    <pre>
      {`Após excluir "Bruno":\n` +
        agenda.contatos.map((c) => `📞 ${c.nome}: ${c.telefone}`).join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex27;
