// Exercício 1 — Classe Livro com dois objetos
// Define a classe (o "molde" para criar livros)
class Livro {
  // O construtor roda automaticamente quando usamos "new"
  constructor(titulo, autor) {
    // "this" é o objeto sendo criado; guardamos os atributos nele
    this.titulo = titulo;
    this.autor = autor;
  }
}

// Componente que demonstra a classe na tela
function Ex01() {
  // Instancia (cria) o primeiro objeto a partir do molde
  const livro1 = new Livro("O Hobbit", "J.R.R. Tolkien");
  // Instancia o segundo objeto, com dados diferentes
  const livro2 = new Livro("Duna", "Frank Herbert");
  // Exibe os dados dos dois objetos em um bloco de código
  return (
    <pre>
      {`Livro 1: "${livro1.titulo}" — ${livro1.autor}
Livro 2: "${livro2.titulo}" — ${livro2.autor}`}
    </pre>
  );
}
// Exporta o componente
export default Ex01;
