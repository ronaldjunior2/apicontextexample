import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Mirror from './Mirror';
import CounterProvider from "./context/Count";
function App() {
  return (
    <CounterProvider>
      
    <Counter></Counter>
    <hr/>
    <Mirror/>
    </CounterProvider>
  );
}

export default App;
