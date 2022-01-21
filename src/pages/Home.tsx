import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const inputChange = (event: any) => {
    setInput(event.target.value);
  };
  const onClickBtn = () => {
    console.log(input);
  };
  return (
    <div>
      <form>
        <p></p>
        <input type="text" onChange={inputChange} value={input} />
        <button type="submit" onClick={onClickBtn}></button>
      </form>
    </div>
  );
};

export default Home;
