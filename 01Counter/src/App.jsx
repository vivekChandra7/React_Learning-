import { useState } from 'react'
import './App.css'

function App() {

  // counter variable hai and setcount function hai jo counter variable ko update karega
  const [counter, setcount] = useState(0);

  const addvalue = () => {
    if (counter < 20) {
      setcount(counter + 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      {/* buttons ke beech gap ke liye wrapper */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button onClick={addvalue}>Add Value</button>

        <button onClick={() => {
          if (counter >= 1) {
            setcount(counter - 1);
          }
        }}>
          Remove Value
        </button>
      </div>
    </>
  );
}
export default App;
