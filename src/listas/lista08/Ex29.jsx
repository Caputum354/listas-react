// Exercício 29 — Playlist ordenada por duração
// Musica com nome e duração em segundos
class Musica {
  constructor(nome, duracao) {
    this.nome = nome;
    this.duracao = duracao;
  }
}

// Playlist gerencia as músicas
class Playlist {
  constructor() {
    this.musicas = [];
  }
  // Adiciona uma música
  adicionar(musica) {
    this.musicas.push(musica);
  }
  // Ordena da mais curta para a mais longa
  ordenarPorDuracao() {
    // sort compara pares: negativo = a vem antes de b
    this.musicas.sort((a, b) => a.duracao - b.duracao);
  }
}

// Componente de demonstração
function Ex29() {
  // Playlist fora de ordem
  const playlist = new Playlist();
  playlist.adicionar(new Musica("Bohemian Rhapsody", 354));
  playlist.adicionar(new Musica("Help!", 138));
  playlist.adicionar(new Musica("Hotel California", 391));
  // Ordena pela duração
  playlist.ordenarPorDuracao();
  return (
    <pre>
      {`Playlist ordenada por duração:\n` +
        playlist.musicas.map((m) => `🎵 ${m.nome} (${m.duracao}s)`).join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex29;
