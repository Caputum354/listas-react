// Exercício 25 — Override complexo de calcularSalario()
// Classe base: salário é apenas o valor base
class Funcionario {
  constructor(nome, salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }
  // Comportamento padrão
  calcularSalario() {
    return this.salarioBase;
  }
}

// Vendedor: base + comissão sobre vendas
class Vendedor extends Funcionario {
  constructor(nome, salarioBase, comissao) {
    super(nome, salarioBase);   // repassa dados ao pai
    this.comissao = comissao;   // valor da comissão
  }
  // Sobrescreve somando a comissão
  calcularSalario() {
    return this.salarioBase + this.comissao;
  }
}

// Diretor: base + bônus fixo de R$ 5000
class Diretor extends Funcionario {
  // Sobrescreve somando o bônus fixo
  calcularSalario() {
    return this.salarioBase + 5000;
  }
}

// Componente de demonstração
function Ex25() {
  // Um de cada tipo, todos com o MESMO método chamado
  const funcionarios = [
    new Funcionario("Ana (comum)", 3000),
    new Vendedor("Bruno (vendedor)", 3000, 1200),
    new Diretor("Carla (diretora)", 10000),
  ];
  return (
    <pre>
      {funcionarios
        .map((f) => `${f.nome}: R$ ${f.calcularSalario()}`)
        .join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex25;
