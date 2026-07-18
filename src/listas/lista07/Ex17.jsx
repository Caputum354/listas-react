// Exercício 17 — Geometria: Forma, Circulo e Quadrado
// Classe base com o método desenhar()
class Forma {
  desenhar() {
    return "Desenhando uma forma genérica";
  }
}

// Círculo herda de Forma e personaliza desenhar()
class Circulo extends Forma {
  desenhar() {
    return "⭕ Desenhando um círculo";
  }
}

// Quadrado herda de Forma e personaliza desenhar()
class Quadrado extends Forma {
  desenhar() {
    return "⬜ Desenhando um quadrado";
  }
}

// Componente de demonstração
function Ex17() {
  // Array com uma instância de cada forma
  const formas = [new Forma(), new Circulo(), new Quadrado()];
  // Chama desenhar() de cada uma e junta os resultados
  return <pre>{formas.map((f) => f.desenhar()).join("\n")}</pre>;
}
// Exporta o componente
export default Ex17;
