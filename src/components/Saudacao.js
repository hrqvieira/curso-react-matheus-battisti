function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, tudo bem?`;
  }

  return <>{nome ? <p>{gerarSaudacao(nome)}</p> : <p>Não possui lista</p>}</>;
}

export default Saudacao;
