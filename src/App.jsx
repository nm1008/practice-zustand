import { useEffect } from "react";
import "./App.css";
import useCounter from "./store";

function App() {
  const { counter, increaseCounter, removeCount, fetchData, data, nextPage } = useCounter();

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <h1>Zustand Practice</h1>
      <h4>{counter}</h4>
      <button onClick={increaseCounter}>Press to add</button>
      <button onClick={removeCount}>Press to remove</button>
      {console.log(nextPage)}
      {data.map((pokemon) => {
        return <div key={pokemon.name}>{pokemon.name}</div>
      })}
    </>
  );
}

export default App;
