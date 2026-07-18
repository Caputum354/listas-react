// Exercício 30 — Simulador de contexto (this) com setInterval
// Importa hooks: useState guarda o valor, useEffect controla o intervalo
import { useState, useEffect } from "react";

/*
  POR QUE ARROW FUNCTION RESOLVE O PROBLEMA DO "this"?

  Uma function tradicional cria seu PRÓPRIO "this". Dentro de
  setInterval(function() { this.contador++ }), o "this" NÃO é mais o
  objeto temporizador — é o contexto global (ou undefined). O código quebra.

  A arrow function NÃO cria "this" próprio: ela HERDA o "this" do local
  onde foi escrita. Em setInterval(() => { this.contador++ }), o "this"
  continua sendo o objeto temporizador. É por isso que arrows são o
  padrão em callbacks.
*/

// Versão "objeto com classe" do enunciado (roda fora do React):
class Temporizador {
  constructor() {
    // Contador de segundos do objeto
    this.contador = 0;
  }
  iniciar(aoAtualizar) {
    // A ARROW herda o this da classe: this.contador funciona!
    return setInterval(() => {
      // Incrementa o contador do objeto a cada segundo
      this.contador += 1;
      // Avisa o React sobre o novo valor
      aoAtualizar(this.contador);
    }, 1000);
  }
}

// Componente de demonstração
function Ex30() {
  // Estado que reflete o contador na tela
  const [segundos, setSegundos] = useState(0);

  // useEffect roda após o componente aparecer na tela
  useEffect(() => {
    // Cria o temporizador da classe acima
    const temporizador = new Temporizador();
    // Inicia, passando setSegundos para atualizar a tela
    const id = temporizador.iniciar(setSegundos);
    // Função de LIMPEZA: para o intervalo quando o componente sai da tela
    return () => clearInterval(id);
  }, []); // [] = executa apenas uma vez

  return (
    <pre>
      {`⏱️ Temporizador rodando: ${segundos}s

A arrow dentro do setInterval herda o "this"
da classe — por isso this.contador funciona.`}
    </pre>
  );
}
// Exporta o componente
export default Ex30;
