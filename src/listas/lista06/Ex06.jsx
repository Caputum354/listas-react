// Exercício 6 — Classe Contador
class Contador {
  constructor() {
    // O valor sempre inicia em 0
    this.valor = 0;
  }
  // Aumenta o valor em 1
  incrementar() {
    this.valor += 1;
  }
  // Diminui o valor em 1
  decrementar() {
    this.valor -= 1;
  }
}

// Componente de demonstração
function Ex06() {
  // Cria o contador (valor = 0)
  const contador = new Contador();
  // Incrementa 3 vezes: 0 -> 1 -> 2 -> 3
  contador.incrementar();
  contador.incrementar();
  contador.incrementar();
  // Decrementa 1 vez: 3 -> 2
  contador.decrementar();
  // Exibe o histórico e o valor final
  return (
    <pre>
      {`3 incrementos + 1 decremento
Valor final: ${contador.valor}`}
    </pre>
  );
}
// Exporta o componente
export default Ex06;
