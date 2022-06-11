import logo from './logo.svg';
import './App.css';
import Greet, { Greet1 } from './components/Greet';
import Welcome from './components/Welcome';
import { Hello, Hello1 } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Greet1 name = 'kshitija' heroName = 'wonder women'></Greet1>
      <Greet1 name = 'sonal'>
        <p>This is child prop</p>
      </Greet1>
    
      <Welcome name='akshay'></Welcome>
      <Hello></Hello>
      <Hello1></Hello1>
    </div>
  );
}

export default App;
