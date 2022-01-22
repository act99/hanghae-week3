import React, { useState } from "react";
import "./App.css";
import ToDoCon from "./containers/ToDoCon";
import MyAppBar from "./containers/MyAppBar";
import { useDispatch } from "react-redux";

function App() {
  const [input, setInput] = useState("");
  const inputChange = (event: any) => {
    setInput(event.target.value);
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(loadDiaryFB());
  }, []);

  return (
    <>
      <MyAppBar />
      <ToDoCon />
    </>
  );
}

export default App;
