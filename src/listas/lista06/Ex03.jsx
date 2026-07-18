// Exercício 3 — Calculadora de Retângulo
class Retangulo {
  // Guarda largura e altura no objeto
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }
  // Método que calcula a área (largura × altura)
  calcularArea() {
    return this.largura * this.altura;
  }
}

// Componente de demonstração
function Ex03() {
  // Cria um retângulo de 5 x 3
  const retangulo = new Retangulo(5, 3);
  // Exibe as medidas e o resultado do método
  return (
    <pre>
      {`Retângulo ${retangulo.largura} x ${retangulo.altura}
Área: ${retangulo.calcularArea()}`}
    </pre>
  );
}
// Exporta o componente
export default Ex03;
