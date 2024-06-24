import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";

function CounterApp() {
  const CounterState = useContext(CounterContext);

  console.log("Context", CounterState);

  return (
    <>
      <div>
        <h1>Context API</h1>
        <h2>Counter App</h2>
        <h3>Count = {CounterState.count}</h3>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default CounterApp;
