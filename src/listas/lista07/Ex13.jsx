// Exercício 13 — Uso do super() no construtor
// Classe pai que recebe nome e salário
class Funcionario {
  constructor(nome, salario) {
    // Atributos herdados por todas as subclasses
    this.nome = nome;
    this.salario = salario;
  }
}

// Subclasse que usa super() explicitamente
class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    // super() REPASSA nome e salário para o construtor de Funcionario.
    // Sem essa chamada, usar "this" aqui geraria um erro!
    super(nome, salario);
    // Só depois do super() podemos adicionar atributos próprios
    this.departamento = departamento;
  }
}

// Componente de demonstração
function Ex13() {
  const gerente = new Gerente("Paulo", 9000, "Vendas");
  return (
    <pre>
      {`super() enviou nome e salário para a classe pai:
Nome: ${gerente.nome} | Salário: R$ ${gerente.salario}
Atributo próprio da subclasse: ${gerente.departamento}`}
    </pre>
  );
}
// Exporta o componente
export default Ex13;
