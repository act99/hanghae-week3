import { Grid } from "@mui/material";
import React from "react";
import ToDoStar from "./writing/ToDoStar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DiaryList from "./diaryList/DiaryList";

const ToDoList = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h3>ToDoList</h3>
          <ToDoStar />
        </Grid>
        <Grid item xs={4}>
          <DiaryList />
        </Grid>
      </Grid>
    </>
  );
};

export default ToDoList;
