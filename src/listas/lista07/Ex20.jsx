// Exercício 20 — Upgrade de Carro: CarroEletrico
// Classe Carro (mesma lógica do exercício 4 da Lista 06)
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    // Velocidade inicia em 0
    this.velocidade = 0;
  }
  // Aumenta a velocidade em 10
  acelerar() {
    this.velocidade += 10;
  }
}

// CarroEletrico herda TODO o comportamento de Carro
class CarroEletrico extends Carro {
  constructor(modelo, bateria) {
    // Repassa o modelo para o construtor de Carro
    super(modelo);
    // Novo atributo: nível de bateria em %
    this.bateria = bateria;
  }
}

// Componente de demonstração
function Ex20() {
  // Cria um carro elétrico com 80% de bateria
  const tesla = new CarroEletrico("Tesla Model 3", 80);
  // O método acelerar() foi HERDADO de Carro e funciona normalmente
  tesla.acelerar();
  tesla.acelerar();
  return (
    <pre>
      {`Modelo: ${tesla.modelo}
Velocidade (método herdado): ${tesla.velocidade} km/h
Bateria (atributo novo): ${tesla.bateria}%`}
    </pre>
  );
}
// Exporta o componente
export default Ex20;
