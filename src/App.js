import DarkModeToggle from "./components/darkMode/DarkModeToggle";
import TodoList from './components/todoList/TodoList';
import InputOTP from './components/inputOTP/InputOTP';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ReactJS Examples</h1>
      {/*<TodoList />*/}
      {/*  <DarkModeToggle />*/}
        <InputOTP />
    </div>
  );
}

export default App;
