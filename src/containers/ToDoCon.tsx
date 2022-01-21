import React from "react";
import TodoCalendar from "../components/ToDoCalendar";
import ToDoList from "../components/ToDoList";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

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
      </Container>
    </React.Fragment>
  );
};

export default ToDoCon;
