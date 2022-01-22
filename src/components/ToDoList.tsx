import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ToDoStar from "./writing/ToDoStar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DiaryList from "./diaryList/DiaryList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ToDoShowHeart } from "./ToDoShowHeart";

const ToDoList = () => {
  async function fetchWritingData() {
    const query = await getDocs(collection(db, "bucket"));
    query.forEach((doc) => console.log(doc.id, doc.data()));
    console.log(query);
  }
  useEffect(() => {
    fetchWritingData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h3>ToDoList</h3>
          <ToDoShowHeart />
        </Grid>
        <Grid item xs={4}>
          <DiaryList />
        </Grid>
      </Grid>
    </>
  );
};

export default ToDoList;
