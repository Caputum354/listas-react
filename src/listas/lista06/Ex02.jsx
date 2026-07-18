// Exercício 2 — Método de Saudação na classe Pessoa
class Pessoa {
  // Recebe e guarda o nome no objeto
  constructor(nome) {
    this.nome = nome;
  }
  // Método: uma FUNÇÃO que pertence à classe
  falar() {
    // Retorna a saudação usando o nome do próprio objeto (this.nome)
    return `Olá, meu nome é ${this.nome}`;
  }
}

// Componente de demonstração
function Ex02() {
  // Cria uma pessoa
  const pessoa = new Pessoa("Caputum");
  // Chama o método falar() e exibe o retorno
  return <pre>{pessoa.falar()}</pre>;
}
// Exporta o componente
export default Ex02;
