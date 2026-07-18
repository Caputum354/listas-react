// Exercício 24 — Gestão de Frota (filtrar por manutenção)
// Veiculo sabe se precisa de manutenção
class Veiculo {
  constructor(modelo, precisaManutencao) {
    this.modelo = modelo;
    this.precisaManutencao = precisaManutencao;
  }
}

// Empresa contém a lista de veículos
class Empresa {
  constructor(nome) {
    this.nome = nome;
    this.veiculos = [];
  }
  // Adiciona um veículo à frota
  adicionar(veiculo) {
    this.veiculos.push(veiculo);
  }
  // Retorna apenas os veículos com precisaManutencao === true
  listarManutencao() {
    return this.veiculos.filter((v) => v.precisaManutencao);
  }
}

// Componente de demonstração
function Ex24() {
  // Monta a frota
  const empresa = new Empresa("TransLog");
  empresa.adicionar(new Veiculo("Caminhão Volvo", true));
  empresa.adicionar(new Veiculo("Van Sprinter", false));
  empresa.adicionar(new Veiculo("Fiorino", true));
  // Filtra os que precisam de manutenção
  const pendentes = empresa.listarManutencao();
  return (
    <pre>
      {`Frota da ${empresa.nome}: ${empresa.veiculos.length} veículos
Precisam de manutenção:\n` + pendentes.map((v) => `🔧 ${v.modelo}`).join("\n")}
    </pre>
  );
}
// Exporta o componente
export default Ex24;
