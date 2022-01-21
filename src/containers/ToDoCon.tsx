import React from "react";
import TodoCalendar from "../components/ToDoCalendar";
import ToDoList from "../components/ToDoList";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ToDoWriting from "../components/writing/ToDoWriting";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ToDoCon = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h3>ToDoCon</h3>
        <TodoCalendar />
        <ToDoList />
        <ToDoWriting />
      </Container>
    </React.Fragment>
  );
};

export default ToDoCon;
