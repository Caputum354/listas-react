// Importa o StrictMode, que ajuda a detectar problemas durante o desenvolvimento
import { StrictMode } from "react";
// Importa a função que cria a "raiz" do React dentro do HTML
import { createRoot } from "react-dom/client";
// Importa o componente principal da aplicação
import App from "./App.jsx";
// Importa o arquivo de estilos globais
import "./styles.css";

// Busca a div #root no index.html e cria a raiz do React nela
createRoot(document.getElementById("root")).render(
  // StrictMode envolve o App para ativar verificações extras em desenvolvimento
  <StrictMode>
    {/* Renderiza o componente principal da aplicação */}
    <App />
  </StrictMode>
);
