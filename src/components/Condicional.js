import {useState} from "react";

function Condicional() {

//useState for email
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
  }

  function limparEmail(e) {
    e.preventDefault();
    setUserEmail("")
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu email..."></input>
        <button type="submit" onClick={enviarEmail}>
          Enviar-email
        </button>
        {userEmail && (
            <div>
                <p>O e-mail do usuario é: {userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
