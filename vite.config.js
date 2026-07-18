// Importa a função que cria a configuração do Vite
import { defineConfig } from "vite";
// Importa o plugin oficial do React para o Vite (habilita JSX e Fast Refresh)
import react from "@vitejs/plugin-react";

// Exporta a configuração do projeto
export default defineConfig({
  // Registra o plugin do React na lista de plugins do Vite
  plugins: [react()],
});
