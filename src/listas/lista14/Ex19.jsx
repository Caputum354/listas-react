// Exercício 19 — Extração de API simulada
function Ex19() {
  // Resposta "crua" de uma API: objetos com MUITAS propriedades
  const respostaApi = [
    { id: 1, nome: "Ana", email: "ana@x.com", telefone: "111", cidade: "SP", ativo: true },
    { id: 2, nome: "Bruno", email: "bruno@x.com", telefone: "222", cidade: "RJ", ativo: false },
  ];
  // Desestrutura APENAS id e nome no parâmetro do map
  // e retorna um objeto enxuto com esses dois campos
  const resumido = respostaApi.map(({ id, nome }) => ({ id, nome }));
  return (
    <pre>
      {`Apenas {id, nome} de cada item:
${JSON.stringify(resumido, null, 2)}`}
    </pre>
  );
}
// Exporta o componente
export default Ex19;
