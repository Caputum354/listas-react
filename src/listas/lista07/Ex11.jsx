// Exercício 11 — Herança: Cachorro herda de Animal
// Classe "pai" (superclasse)
class Animal {
  constructor(nome) {
    // Todo animal tem um nome
    this.nome = nome;
  }
  // Método genérico, que as subclasses podem sobrescrever
  emitirSom() {
    return "Som genérico de animal";
  }
}

// Classe "filha": "extends" faz o Cachorro HERDAR tudo de Animal
class Cachorro extends Animal {
  // Sobrescreve (override) o método do pai com um comportamento próprio
  emitirSom() {
    return "Latido";
  }
}

// Componente de demonstração
function Ex11() {
  // Instância genérica usa o método original
  const animal = new Animal("Bicho");
  // Instância de Cachorro usa o método SOBRESCRITO
  const cachorro = new Cachorro("Rex");
  return (
    <pre>
      {`Animal genérico: ${animal.emitirSom()}
Cachorro ${cachorro.nome}: ${cachorro.emitirSom()}`}
    </pre>
  );
}
// Exporta o componente
export default Ex11;
