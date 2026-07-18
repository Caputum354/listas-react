// Exercício 26 — Formatação de datas com map e split
function Ex26() {
  // Datas no formato brasileiro DD/MM/AAAA
  const datas = ["25/12/2025", "01/01/2026", "17/07/2026"];
  // Para cada data: split("/") quebra em ["DD", "MM", "AAAA"],
  // e a desestruturação nomeia cada parte
  const objetos = datas.map((data) => {
    // Quebra a string nas barras
    const [dia, mes, ano] = data.split("/");
    // Retorna o objeto com as três partes
    return { dia, mes, ano };
  });
  return (
    <pre>
      {/* Exibe o array de objetos formatado */}
      {JSON.stringify(objetos, null, 2)}
    </pre>
  );
}
// Exporta o componente
export default Ex26;
