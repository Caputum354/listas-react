// Exercício 12 — Funcionario e subclasse Gerente
// Classe base com os dados comuns a todo funcionário
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
}

// Gerente herda de Funcionario e ADICIONA um atributo próprio
class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    // super() chama o construtor do pai (obrigatório antes de usar this)
    super(nome, salario);
    // Atributo exclusivo do Gerente
    this.departamento = departamento;
  }
}

// Componente de demonstração
function Ex12() {
  // Cria um gerente com o atributo extra
  const gerente = new Gerente("Marina", 8500, "Tecnologia");
  return (
    <pre>
      {`Nome: ${gerente.nome}
Salário: R$ ${gerente.salario}
Departamento: ${gerente.departamento}`}
    </pre>
  );
}
// Exporta o componente
export default Ex12;
