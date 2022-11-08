import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [incrementNum, setIncrementNum] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const addVal = Number(incrementNum) || 0;
  const resetAll = () => {
    setIncrementNum(0);
    dispatch(reset());
  };
  return (
    <div className="App">
      {/* <h1>Counter</h1>
      <p>{counter}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementNum}
        onChange={(e) => setIncrementNum(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addVal))}>
          Add amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
