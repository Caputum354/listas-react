// Exercício 22 — Biblioteca Digital com busca por autor
// Classe Livro
class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

// Biblioteca armazena um array de Livro
class Biblioteca {
  constructor() {
    this.livros = [];
  }
  // Adiciona um livro ao acervo
  adicionar(livro) {
    this.livros.push(livro);
  }
  // Retorna todos os livros cujo autor corresponde ao nome buscado
  buscarPorAutor(nome) {
    return this.livros.filter((livro) => livro.autor === nome);
  }
}

// Componente de demonstração
function Ex22() {
  // Monta a biblioteca com três livros
  const biblioteca = new Biblioteca();
  biblioteca.adicionar(new Livro("O Hobbit", "Tolkien"));
  biblioteca.adicionar(new Livro("O Senhor dos Anéis", "Tolkien"));
  biblioteca.adicionar(new Livro("Duna", "Herbert"));
  // Busca somente os livros de Tolkien
  const encontrados = biblioteca.buscarPorAutor("Tolkien");
  return (
    <pre>
      {`Busca por autor "Tolkien":\n` +
        encontrados.map((l) => `• ${l.titulo}`).join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex22;
