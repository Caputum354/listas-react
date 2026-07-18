// Exercício 28 — Formulario com campos dinâmicos
// Recebe "titulo" e "campos" (array) e gera os inputs automaticamente
function Formulario({ titulo, campos }) {
  return (
    <form>
      {/* Título do formulário */}
      <h3>{titulo}</h3>
      {/* Para cada campo do array, gera label + input */}
      {campos.map((campo) => (
        <div key={campo.nome} style={{ marginBottom: 10 }}>
          {/* Rótulo visível do campo */}
          <label style={{ display: "block", fontSize: 13 }}>{campo.rotulo}</label>
          {/* Input com o tipo definido nos dados (text, email, password...) */}
          <input type={campo.tipo} name={campo.nome} placeholder={campo.rotulo} />
        </div>
      ))}
      {/* Botão de envio (type button para não recarregar a página) */}
      <button type="button">Enviar</button>
    </form>
  );
}

// Componente do exercício
function Ex28() {
  // Definição dos campos: mudar este array muda o formulário inteiro
  const campos = [
    { nome: "nome", rotulo: "Nome completo", tipo: "text" },
    { nome: "email", rotulo: "E-mail", tipo: "email" },
    { nome: "senha", rotulo: "Senha", tipo: "password" },
  ];
  return <Formulario titulo="Cadastro de Usuário" campos={campos} />;
}
// Exporta o componente do exercício
export default Ex28;
