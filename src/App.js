import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'


function App() {
  const name = "Maria"
  return (
    <div className="App">
      <Frase />
      <Frase />

      <SayMyName nome="Henrique" />
      <SayMyName nome="João" />
      <SayMyName nome="Matheus" />
      <SayMyName nome={name} />
      <Pessoa nome="Henrique" idade="20" profissao="PO" foto="https://via.placeholder.com/150"/>
      <h1>Testando css</h1>
    </div>
  );
}

export default App;
