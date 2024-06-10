// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0)
//   const addCount = () => {
//     setCount(count + 1)
//   }
//   const minusCount = () => {
//     setCount(count - 1)
//   }
//   return (
//     <div>
//       <button onClick={minusCount}>-</button>
//       Count: {count}
//       <button onClick={addCount}>+</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(false);
  const changeMode = () => {
    setIsDark(!isDark)
  }
  return (
    <div style={{
      background: ""
    }}>
      {isDark ? "다크모드" : "화이트모드"}
      <button onClick={changeMode}>change</button>
    </div>
  );
}
export default App;