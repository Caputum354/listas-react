// Exercício 8 — Instâncias de Animal
class Animal {
  constructor(nome, especie) {
    // Nome próprio do animal
    this.nome = nome;
    // Espécie (cachorro, gato...)
    this.especie = especie;
  }
}

// Componente de demonstração
function Ex08() {
  // Três objetos diferentes criados do MESMO molde
  const cachorro = new Animal("Rex", "Cachorro");
  const gato = new Animal("Mimi", "Gato");
  const passaro = new Animal("Loro", "Pássaro");
  // Coloca os três em um array para exibir com .map()
  const animais = [cachorro, gato, passaro];
  return (
    <pre>
      {/* Gera uma linha por animal e junta tudo com quebras de linha */}
      {animais.map((a) => `${a.especie}: ${a.nome}`).join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex08;
