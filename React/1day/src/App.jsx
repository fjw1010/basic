import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CountContext = createContext(0)

function App() {
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  return (
    <CountContext.Provider value={{count, plus, minus}}>
      <Component />
    </CountContext.Provider>
  )
}

function Component() {
  const {count, plus, minus} = useContext(CountContext);
  return (
    <div>
      <p>숫자 : {count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}
export default App
