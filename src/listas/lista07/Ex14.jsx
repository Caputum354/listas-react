// Exercício 14 — Sistema Bancário: Conta e ContaPoupanca
// Classe base de qualquer conta bancária
class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
}

// A poupança herda a estrutura e ganha o método aplicarJuros()
class ContaPoupanca extends Conta {
  // Aplica o percentual de juros sobre o saldo atual
  aplicarJuros(percentual) {
    // Ex: 10% -> saldo * 1.10
    this.saldo = this.saldo * (1 + percentual / 100);
  }
}

// Componente de demonstração
function Ex14() {
  // Poupança com R$ 1000
  const poupanca = new ContaPoupanca("Caputum", 1000);
  // Guarda o saldo anterior para exibir a comparação
  const saldoAntes = poupanca.saldo;
  // Aplica 10% de juros
  poupanca.aplicarJuros(10);
  return (
    <pre>
      {`Titular: ${poupanca.titular}
Saldo antes: R$ ${saldoAntes.toFixed(2)}
Após juros de 10%: R$ ${poupanca.saldo.toFixed(2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex14;
