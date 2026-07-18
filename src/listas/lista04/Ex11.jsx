// Exercício 11 — Componente Perfil
// Recebe "nome", "email" e "foto" como props
function Perfil({ nome, email, foto }) {
  return (
    <div>
      {/* Foto do perfil: a prop "foto" vira o src da imagem */}
      <img src={foto} alt={"Foto de " + nome} width={80} style={{ borderRadius: "50%" }} />
      {/* Nome do usuário */}
      <p><strong>{nome}</strong></p>
      {/* E-mail do usuário */}
      <p>{email}</p>
    </div>
  );
}

// Componente do exercício
function Ex11() {
  return (
    <Perfil
      nome="Caputum"
      email="caputum@email.com"
      foto="https://api.dicebear.com/9.x/bottts/svg?seed=caputum"
    />
  );
}
// Exporta o componente do exercício
export default Ex11;
