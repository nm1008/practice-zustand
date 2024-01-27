import "./App.css";
import useCounter from "./store";

function App() {
  const { counter, increaseCounter, removeCount } = useCounter();

  return (
    <>
      <h1>Zustand Practice</h1>
      <h4>{counter}</h4>
      <button onClick={increaseCounter}>Press to add</button>
      <button onClick={removeCount}>Press to remove</button>
    </>
  );
}

export default App;
