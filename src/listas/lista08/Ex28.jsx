// Exercício 28 — Estacionamento com limite de vagas
class Estacionamento {
  constructor(limiteVagas) {
    // Quantidade máxima de vagas
    this.limiteVagas = limiteVagas;
    // Veículos atualmente estacionados
    this.veiculos = [];
  }
  // Tenta estacionar: só entra se houver vaga
  estacionar(veiculo) {
    // Verifica se o estacionamento está cheio
    if (this.veiculos.length >= this.limiteVagas) {
      return `🚫 ${veiculo} não entrou: estacionamento lotado!`;
    }
    // Há vaga: adiciona ao array
    this.veiculos.push(veiculo);
    return `🅿️ ${veiculo} estacionou (${this.veiculos.length}/${this.limiteVagas})`;
  }
}

// Componente de demonstração
function Ex28() {
  // Estacionamento pequeno: apenas 2 vagas
  const estacionamento = new Estacionamento(2);
  // Terceiro carro deve ser recusado
  const log = [
    estacionamento.estacionar("Fusca"),
    estacionamento.estacionar("Civic"),
    estacionamento.estacionar("Corolla"),
  ];
  return <pre>{log.join("\n")}</pre>;
}
// Exporta o componente
export default Ex28;
