// Exercício 7 — Conversor de Temperatura
class Temperatura {
  constructor(celsius) {
    // Guarda a temperatura em Celsius
    this.celsius = celsius;
  }
  // Converte usando a fórmula F = C × 9/5 + 32
  paraFahrenheit() {
    return this.celsius * 9 / 5 + 32;
  }
}

// Componente de demonstração
function Ex07() {
  // Cria a temperatura de 30°C
  const temperatura = new Temperatura(30);
  // Exibe a conversão
  return (
    <pre>
      {`${temperatura.celsius}°C = ${temperatura.paraFahrenheit()}°F`}
    </pre>
  );
}
// Exporta o componente
export default Ex07;
