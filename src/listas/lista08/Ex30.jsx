// Exercício 30 — Simulador de Elevador
class Elevador {
  constructor(totalAndares, capacidade) {
    this.andarAtual = 0;              // começa no térreo
    this.totalAndares = totalAndares; // último andar permitido
    this.capacidade = capacidade;     // máximo de pessoas
    this.pessoas = 0;                 // pessoas dentro agora
  }
  // Sobe um andar, respeitando o limite do prédio
  subir() {
    if (this.andarAtual >= this.totalAndares) {
      return "⚠️ Já está no último andar!";
    }
    this.andarAtual += 1;
    return `⬆️ Subiu para o andar ${this.andarAtual}`;
  }
  // Desce um andar, sem passar do térreo
  descer() {
    if (this.andarAtual <= 0) {
      return "⚠️ Já está no térreo!";
    }
    this.andarAtual -= 1;
    return `⬇️ Desceu para o andar ${this.andarAtual}`;
  }
  // Entram pessoas, respeitando a capacidade
  entrar(quantidade) {
    if (this.pessoas + quantidade > this.capacidade) {
      return `🚫 Não cabem +${quantidade} pessoas (capacidade: ${this.capacidade})`;
    }
    this.pessoas += quantidade;
    return `🧍 Entraram ${quantidade} (total: ${this.pessoas}/${this.capacidade})`;
  }
}

// Componente de demonstração
function Ex30() {
  // Prédio de 5 andares, elevador para 4 pessoas
  const elevador = new Elevador(5, 4);
  // Sequência de ações registradas em um log
  const log = [
    elevador.entrar(3),  // ok: 3/4
    elevador.entrar(2),  // recusado: passaria de 4
    elevador.subir(),    // andar 1
    elevador.subir(),    // andar 2
    elevador.descer(),   // andar 1
    elevador.descer(),   // térreo
    elevador.descer(),   // aviso: já está no térreo
  ];
  return <pre>{log.join("\n")}</pre>;
}
// Exporta o componente
export default Ex30;
