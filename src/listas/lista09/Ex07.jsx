// Exercício 7 — Conversor de Dólar para Real
// Taxa fixa de 5.0 conforme o enunciado
const dolarParaReal = (dolar) => dolar * 5.0;

// Componente de demonstração
function Ex07() {
  return (
    <pre>
      {`US$ 10 = R$ ${dolarParaReal(10).toFixed(2)}
US$ 99.50 = R$ ${dolarParaReal(99.5).toFixed(2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex07;
