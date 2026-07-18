// Exercício 3 — Componente Imagem
// Recebe as props "src" (endereço da imagem) e "alt" (texto alternativo)
function Imagem({ src, alt }) {
  // Repassa as props para os atributos da tag <img>
  // width limita o tamanho apenas para visualização
  return <img src={src} alt={alt} width={150} />;
}

// Componente do exercício
function Ex03() {
  return (
    // Usa a Imagem passando um endereço real e uma descrição
    <Imagem
      src="https://react.dev/images/brand/logo_light.svg"
      alt="Logotipo do React"
    />
  );
}
// Exporta o componente do exercício
export default Ex03;
