// Exercício 26 — Transferência entre contas
class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  // Transfere valor desta conta (this) para outra instância (contaDestino)
  transferir(valor, contaDestino) {
    // Valida o saldo antes de transferir
    if (valor > this.saldo) {
      return `❌ Transferência negada: saldo insuficiente.`;
    }
    // Debita da conta de origem
    this.saldo -= valor;
    // Credita na conta de destino (interação entre objetos!)
    contaDestino.saldo += valor;
    return `✅ ${this.titular} transferiu R$ ${valor} para ${contaDestino.titular}`;
  }
}

// Componente de demonstração
function Ex26() {
  // Duas contas independentes
  const contaA = new Conta("Caputum", 1000);
  const contaB = new Conta("Maria", 200);
  // Executa a transferência de R$ 300
  const resultado = contaA.transferir(300, contaB);
  return (
    <pre>
      {`${resultado}
Saldo ${contaA.titular}: R$ ${contaA.saldo}
Saldo ${contaB.titular}: R$ ${contaB.saldo}`}
    </pre>
  );
}
// Exporta o componente
export default Ex26;
