// Exercício 15 — Veículos com mover() diferente
// Classe pai com o comportamento padrão
class Veiculo {
  mover() {
    return "O veículo está se movendo...";
  }
}

// Avião sobrescreve mover() com sua própria mensagem
class Aviao extends Veiculo {
  mover() {
    return "✈️ O avião está voando pelos céus!";
  }
}

// Carro sobrescreve mover() com outra mensagem
class Carro extends Veiculo {
  mover() {
    return "🚗 O carro está andando pela estrada!";
  }
}

// Componente de demonstração
function Ex15() {
  // Uma instância de cada classe
  const veiculo = new Veiculo();
  const aviao = new Aviao();
  const carro = new Carro();
  // Cada objeto responde ao MESMO método de forma diferente (polimorfismo)
  return (
    <pre>
      {`${veiculo.mover()}
${aviao.mover()}
${carro.mover()}`}
    </pre>
  );
}
// Exporta o componente
export default Ex15;
