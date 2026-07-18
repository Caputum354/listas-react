// Exercício 23 — Sistema de RPG (objetos interagindo)
class Personagem {
  constructor(nome, vida, ataque) {
    this.nome = nome;   // nome do personagem
    this.vida = vida;   // pontos de vida
    this.ataque = ataque; // dano que causa por golpe
  }
  // Ataca OUTRO objeto: subtrai a vida do inimigo
  atacar(inimigo) {
    // Reduz a vida do inimigo pelo valor do ataque deste personagem
    inimigo.vida -= this.ataque;
    return `${this.nome} atacou ${inimigo.nome} causando ${this.ataque} de dano!`;
  }
}

// Componente de demonstração
function Ex23() {
  // Dois personagens
  const heroi = new Personagem("Cavaleiro", 100, 25);
  const dragao = new Personagem("Dragão", 120, 40);
  // Registra cada turno de batalha
  const log = [];
  log.push(heroi.atacar(dragao));      // dragão: 120 - 25 = 95
  log.push(dragao.atacar(heroi));      // herói: 100 - 40 = 60
  log.push(heroi.atacar(dragao));      // dragão: 95 - 25 = 70
  return (
    <pre>
      {log.join("\n") +
        `\n\nVida final — ${heroi.nome}: ${heroi.vida} | ${dragao.nome}: ${dragao.vida}`}
    </pre>
  );
}
// Exporta o componente
export default Ex23;
