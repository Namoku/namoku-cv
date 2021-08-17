import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

import App from "./App";
function Boton() {
  const [count, setCount] = useState(0);
  return (
    <div className="Boton">
      <button onClick={() => setCount(count + 1)}>Have fun!</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Boton />
  </StrictMode>,
  rootElement
);
