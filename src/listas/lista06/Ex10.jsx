// Exercício 10 — Classe Lampada (ligar/desligar)
class Lampada {
  constructor() {
    // A lâmpada começa desligada (boolean)
    this.ligada = false;
  }
  // Muda o estado para ligada
  ligar() {
    this.ligada = true;
  }
  // Muda o estado para desligada
  desligar() {
    this.ligada = false;
  }
}

// Componente de demonstração
function Ex10() {
  // Cria a lâmpada (desligada)
  const lampada = new Lampada();
  // Guarda o estado inicial para exibir depois
  const estadoInicial = lampada.ligada;
  // Liga a lâmpada
  lampada.ligar();
  const depoisDeLigar = lampada.ligada;
  // Desliga novamente
  lampada.desligar();
  const depoisDeDesligar = lampada.ligada;
  // Exibe a sequência de estados (💡 = ligada, ⚫ = desligada)
  return (
    <pre>
      {`Estado inicial: ${estadoInicial ? "💡 ligada" : "⚫ desligada"}
Após ligar():   ${depoisDeLigar ? "💡 ligada" : "⚫ desligada"}
Após desligar(): ${depoisDeDesligar ? "💡 ligada" : "⚫ desligada"}`}
    </pre>
  );
}
// Exporta o componente
export default Ex10;
