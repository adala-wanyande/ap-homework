import { useState } from "react";
import Parent from "./components/Parent";
import { AgeContext } from "./context/AgeContext";

function App() {
  const [age, setAge] = useState<age>(21);
  return (
    <AgeContext.Provider value={{ age }}>
      <Parent />
    </AgeContext.Provider>
  );
}

export default App;
