// Exercício 16 — Validação de saque (saldo nunca negativo)
class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  // Só saca se houver saldo suficiente
  sacar(valor) {
    // Validação: impede que o saldo fique negativo
    if (valor > this.saldo) {
      // Retorna mensagem de erro sem alterar o saldo
      return `❌ Saque de R$ ${valor} negado! Saldo insuficiente.`;
    }
    // Se passou na validação, desconta o valor
    this.saldo -= valor;
    return `✅ Saque de R$ ${valor} realizado. Saldo: R$ ${this.saldo}`;
  }
}

// Componente de demonstração
function Ex16() {
  // Conta com R$ 500
  const conta = new Conta("Caputum", 500);
  // Primeiro saque válido, segundo saque maior que o saldo
  const tentativa1 = conta.sacar(200);
  const tentativa2 = conta.sacar(1000);
  return (
    <pre>
      {`Saldo inicial: R$ 500
${tentativa1}
${tentativa2}`}
    </pre>
  );
}
// Exporta o componente
export default Ex16;
