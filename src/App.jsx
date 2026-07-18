// Importa o hook useState para guardar qual lista/exercício está selecionado
import { useState } from "react";

// Importa o "índice" de cada lista (array com todos os exercícios dela)
import lista01 from "./listas/lista01";
import lista02 from "./listas/lista02";
import lista03 from "./listas/lista03";
import lista04 from "./listas/lista04";
import lista05 from "./listas/lista05";
import lista06 from "./listas/lista06";
import lista07 from "./listas/lista07";
import lista08 from "./listas/lista08";
import lista09 from "./listas/lista09";
import lista10 from "./listas/lista10";
import lista11 from "./listas/lista11";
import lista12 from "./listas/lista12";
import lista13 from "./listas/lista13";
import lista14 from "./listas/lista14";
import lista15 from "./listas/lista15";

// Array com todas as listas: nome exibido no menu + exercícios importados acima
const listas = [
  { nome: "Lista 01 – Variáveis e JSX", exercicios: lista01 },
  { nome: "Lista 02 – Arrays", exercicios: lista02 },
  { nome: "Lista 03 – Props (básico)", exercicios: lista03 },
  { nome: "Lista 04 – Props (intermediário)", exercicios: lista04 },
  { nome: "Lista 05 – Props (avançado)", exercicios: lista05 },
  { nome: "Lista 06 – POO: Classes", exercicios: lista06 },
  { nome: "Lista 07 – POO: Herança", exercicios: lista07 },
  { nome: "Lista 08 – POO: Lógica", exercicios: lista08 },
  { nome: "Lista 09 – Arrow Functions", exercicios: lista09 },
  { nome: "Lista 10 – Arrows + Arrays", exercicios: lista10 },
  { nome: "Lista 11 – Arrows (difícil)", exercicios: lista11 },
  { nome: "Lista 12 – Desafio: Classe + Arrow", exercicios: lista12 },
  { nome: "Lista 13 – Map e Destructuring", exercicios: lista13 },
  { nome: "Lista 14 – Map (médio)", exercicios: lista14 },
  { nome: "Lista 15 – Map (difícil)", exercicios: lista15 },
];

// Componente principal: controla a navegação entre listas e exercícios
function App() {
  // Estado: índice da lista selecionada no menu lateral (começa na Lista 01)
  const [listaAtual, setListaAtual] = useState(0);
  // Estado: índice do exercício selecionado dentro da lista (começa no 1º)
  const [exercicioAtual, setExercicioAtual] = useState(0);

  // Recupera o objeto da lista selecionada a partir do array "listas"
  const lista = listas[listaAtual];
  // Recupera o exercício selecionado dentro dessa lista
  const exercicio = lista.exercicios[exercicioAtual];
  // Extrai o componente React do exercício (com inicial maiúscula p/ JSX)
  const Componente = exercicio.Componente;

  // Função chamada ao clicar em uma lista no menu lateral
  function trocarLista(indice) {
    // Atualiza a lista selecionada
    setListaAtual(indice);
    // Volta para o primeiro exercício da nova lista
    setExercicioAtual(0);
  }

  // JSX retornado: menu lateral + área de conteúdo
  return (
    <div className="layout">
      {/* ===== MENU LATERAL ===== */}
      <aside className="sidebar">
        {/* Título do menu */}
        <h1>📚 Listas React</h1>
        {/* Percorre todas as listas e cria um botão para cada uma */}
        {listas.map((item, indice) => (
          <button
            // key única para o React identificar cada botão na lista
            key={item.nome}
            // Aplica a classe "ativa" apenas na lista selecionada
            className={indice === listaAtual ? "ativa" : ""}
            // Ao clicar, troca para a lista correspondente
            onClick={() => trocarLista(indice)}
          >
            {/* Nome da lista exibido no botão */}
            {item.nome}
          </button>
        ))}
      </aside>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main className="conteudo">
        {/* Barra com um botão para cada exercício da lista atual */}
        <div className="abas">
          {lista.exercicios.map((ex, indice) => (
            <button
              // key única baseada no id do exercício
              key={ex.id}
              // Marca como "ativa" o exercício selecionado
              className={indice === exercicioAtual ? "ativa" : ""}
              // Ao clicar, exibe o exercício correspondente
              onClick={() => setExercicioAtual(indice)}
            >
              {/* Número do exercício no botão */}
              Ex {ex.id}
            </button>
          ))}
        </div>

        {/* Cartão onde o exercício selecionado é renderizado */}
        <div className="exercicio">
          {/* Título descritivo do exercício */}
          <h2 className="exercicio-titulo">
            Exercício {exercicio.id} — {exercicio.titulo}
          </h2>
          {/* Renderiza o componente do exercício selecionado */}
          <Componente />
        </div>
      </main>
    </div>
  );
}

// Exporta o App para ser usado no main.jsx
export default App;
