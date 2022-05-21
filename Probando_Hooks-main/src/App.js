import './App.css';
import { ChangeText } from './components/ChangeText/ChangeText';
import { HookUseState } from './components/HookUseState/HookUseState';
 

function App() {
  return (
    <div className="App">
      <HookUseState />
      <hr />
      <ChangeText />
    </div>
  );
}

export default App;
