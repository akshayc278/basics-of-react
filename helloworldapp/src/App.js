import logo from './logo.svg';
import './App.css';
import Greet, { Greet1 } from './components/Greet';
import Welcome from './components/Welcome';
import { Hello, Hello1 } from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './EventComponents/FunctionClick';
import EventBind from './EventComponents/EventBind';
import Parent from './components/Parent';
import ListPattern from './components/ListPattern';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';



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

      <Message></Message>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <EventBind></EventBind>
      <Parent></Parent>
      <ListPattern></ListPattern>
      <StyleSheet></StyleSheet>
      <Form></Form>
    </div>
  );
}

export default App;
