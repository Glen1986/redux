import Counter from './components/Counter';
import Display from './components/Display'
import "./styles.css";
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header"> 
        <Display/>
        <Counter/>
      </header>
    </div>
  );
}
export default App;

