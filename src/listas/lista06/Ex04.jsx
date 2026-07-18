// Exercício 4 — Classe Carro com acelerar()
class Carro {
  constructor(modelo) {
    // Modelo do carro
    this.modelo = modelo;
    // Velocidade SEMPRE começa em 0
    this.velocidade = 0;
  }
  // Cada chamada aumenta a velocidade em 10
  acelerar() {
    this.velocidade += 10;
  }
}

// Componente de demonstração
function Ex04() {
  // Cria o carro (velocidade = 0)
  const carro = new Carro("Fusca Turbo");
  // Acelera três vezes: 0 -> 10 -> 20 -> 30
  carro.acelerar();
  carro.acelerar();
  carro.acelerar();
  // Exibe o estado final do objeto
  return (
    <pre>
      {`Carro: ${carro.modelo}
Acelerou 3 vezes...
Velocidade atual: ${carro.velocidade} km/h`}
    </pre>
  );
}
// Exporta o componente
export default Ex04;
