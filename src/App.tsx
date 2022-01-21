import { useState } from "react";
import "./App.css";
import ToDoCon from "./containers/ToDoCon";
import { useSelector } from "react-redux";

function App() {
  // redux
  const { clickDateValue } = useSelector((state) => state.clickDate);

  const [input, setInput] = useState("");
  const inputChange = (event: any) => {
    setInput(event.target.value);
  };
  const onClickBtn = () => {
    console.log(input);
  };
  return (
    <>
      <ToDoCon />
      <div id="id" className="App">
        <div style={styles}>
          <h1 style={{ color: "green" }}>안녕하세요</h1>
          <hr />
          <p style={{ textAlign: "left" }}>이름을 입력해주세요.</p>
          <input type="text" onChange={inputChange} value={input} />
        </div>
        <button onClick={onClickBtn}>버튼</button>
      </div>
    </>
  );
}

export default App;

const styles = {
  border: "1px solid #eee",
  padding: "20px",
  margin: "30px auto",
  width: "200px",
};
