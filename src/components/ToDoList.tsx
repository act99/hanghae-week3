import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ToDoStar from "./writing/ToDoStar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DiaryList from "./diaryList/DiaryList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ToDoShowHeart } from "./ToDoShowHeart";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const [diaries, setDiaries] = useState<any>([]);
  const dDay = useSelector((state: RootState) => state.counter.value);
  const diaryCollectionRef = collection(db, "diary");
  // async function fetchWritingData() {
  //   const query = await getDocs(collection(db, "diary"));
  //   query.forEach((doc) => console.log(doc.id, doc.data()));
  //   console.log(query);
  // }
  const fetchDiary = async () => {
    const data = await getDocs(diaryCollectionRef);
    setDiaries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    fetchDiary();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h3>오늘의 일기</h3>
          {diaries.map((diary: any) => {
            if (diary.dday === dDay) {
              return (
                <div>
                  {diary.diary}
                  <ToDoShowHeart heartNumber={diary.heart} />
                </div>
              );
            }
          })}
        </Grid>
        <Grid item xs={4}>
          <DiaryList />
        </Grid>
      </Grid>
    </>
  );
};

export default ToDoList;
