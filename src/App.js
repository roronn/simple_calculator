import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);




  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));

  };

  function minus(e) {
  	// Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));

  };

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = ""
  };

  function resetResult(e) {
  	// Add the code for the resetResult function
    e.preventDefault();
    inputRef.current.value = "";
    setResult((result) => result = 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          onWheel={() => document.activeElement.blur()}
          placeholder="Type a number"
        />
        <button onClick={plus}>+</button>
        <button onClick={minus}><bold>-</bold></button>
        <button onClick={times}>x</button>
        <button onClick={divide}>%</button>
        <button onClick={resetInput}>del</button>
        <button onClick={resetResult}>AC</button>
      </form>
    </div>
  );
}

export default App;
