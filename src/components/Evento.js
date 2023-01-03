import Button from "./evento/Button";

function Evento() {
  function meuEvento1() {
    console.log(`Ativando primeiro evento`);
  }

  function segundoEvento(){
    console.log("Ativando segundo elemento")
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento1} text="Primeiro Evento" />

      <p>Clique para disparar um evento</p>
      <Button event={segundoEvento} text="Segindo Evento" />
    </div>
  );
}

export default Evento;
