import { useState } from "react";
import "./App.css";
import ToDoCon from "./containers/ToDoCon";
import { DefaultRootState, useSelector } from "react-redux";
import MyAppBar from "./containers/MyAppBar";

function App() {
  const [input, setInput] = useState("");
  const inputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <>
      <MyAppBar />
      <ToDoCon />
    </>
  );
}

export default App;
