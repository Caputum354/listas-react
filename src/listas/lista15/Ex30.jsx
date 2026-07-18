// Exercício 30 — Agregador: classe Relatorio com map + desestruturação
// Classe Usuario: representa os dados "crus" do sistema
class Usuario {
  constructor(nome, email, endereco, permissoes) {
    this.nome = nome;
    this.email = email;
    // Objeto aninhado com cidade e estado
    this.endereco = endereco;
    // Array de permissões do usuário
    this.permissoes = permissoes;
  }
}

// Classe Relatorio: transforma instâncias em logs resumidos
class Relatorio {
  // Recebe o array de instâncias de Usuario
  gerar(usuarios) {
    // Desestruturação PESADA no parâmetro do map:
    // - nome e email direto
    // - endereco: { cidade } entra no objeto aninhado
    // - permissoes: [primeiraPermissao] pega só a 1ª do array
    return usuarios.map(
      ({ nome, email, endereco: { cidade }, permissoes: [primeiraPermissao] }) =>
        `[LOG] ${nome} <${email}> — ${cidade} — permissão principal: ${primeiraPermissao}`
    );
  }
}

// Componente de demonstração
function Ex30() {
  // Cria instâncias com dados completos
  const usuarios = [
    new Usuario("Ana", "ana@x.com", { cidade: "São Paulo", estado: "SP" }, ["admin", "editor"]),
    new Usuario("Bruno", "bruno@x.com", { cidade: "Recife", estado: "PE" }, ["leitor"]),
  ];
  // Gera o relatório resumido
  const relatorio = new Relatorio();
  const logs = relatorio.gerar(usuarios);
  return <pre>{logs.join("\n")}</pre>;
}
// Exporta o componente
export default Ex30;
