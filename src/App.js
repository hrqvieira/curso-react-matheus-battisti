import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {
  const name = "Maria"
  return (
    <div className="App">
      <SayMyName nome="Henrique" />
      <SayMyName nome="João" />
      <SayMyName nome="Matheus" />
      <SayMyName nome={name} />
      <Pessoa nome="Henrique" idade="20" profissao="PO" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
