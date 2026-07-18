# 📚 Listas de Exercícios — ReactJS e JavaScript Moderno

Projeto único em **React + Vite** reunindo **15 listas de exercícios (141 exercícios)** com o código **100% comentado, linha por linha, em português**.

A aplicação possui um menu lateral para navegar entre as listas e abas para alternar entre os exercícios — cada exercício roda ao vivo na tela.

## 🚀 Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra o endereço exibido no terminal (geralmente http://localhost:5173)
```

## 🗂️ Conteúdo das listas

| Lista | Tema | Exercícios |
|-------|------|------------|
| 01 | Variáveis e interpolação no JSX | 1–15 |
| 02 | Arrays no JSX | 1–15 |
| 03 | Componentes e Props — básico | 1–10 |
| 04 | Componentes e Props — intermediário | 11–20 |
| 05 | Componentes e Props — avançado (children, listas, modal) | 21–30 |
| 06 | POO: Classes, construtor e métodos | 1–10 |
| 07 | POO: Herança, `extends` e `super()` | 11–20 |
| 08 | POO: Composição e lógica de negócio | 21–30 |
| 09 | Arrow Functions — sintaxe | 1–10 |
| 10 | Arrow Functions — map, filter, find, reduce | 11–20 |
| 11 | Arrow Functions — closures, chaining e `this` | 21–30 |
| 12 | Desafio: Classe + Arrow Function | único |
| 13 | Map e Desestruturação — fundamentos | 1–10 |
| 14 | Map e Desestruturação — nível médio | 11–20 |
| 15 | Map e Desestruturação — avançado | 21–30 |

## 📁 Estrutura

```
listas-react/
├── index.html          # página base onde o React é montado
├── package.json        # dependências e scripts
├── vite.config.js      # configuração do Vite
└── src/
    ├── main.jsx        # ponto de entrada do React
    ├── App.jsx         # menu de navegação entre listas/exercícios
    ├── styles.css      # estilos globais
    └── listas/
        ├── lista01/    # um arquivo .jsx por exercício + index.js + README
        ├── lista02/
        └── ... até lista15/
```

Cada pasta de lista contém:
- Um arquivo `ExNN.jsx` por exercício, com **todas as linhas comentadas**
- Um `index.js` que registra os exercícios no menu
- Um `README.md` com os enunciados

## 🛠️ Tecnologias

React 18 • Vite 5 • JavaScript (ES6+)
