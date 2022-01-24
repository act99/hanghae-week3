import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ToDoStar from "./writing/ToDoStar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DiaryList from "./diaryList/DiaryList";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ToDoShowHeart } from "./ToDoShowHeart";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { dummyDiary } from "./dummy_diary";

const ToDoList = () => {
  const [diaries, setDiaries] = useState<any | null>({});
  const dDay = useSelector((state: RootState) => state.counter.value);
  const diaryCollectionRef = collection(db, "diary");

  const fetchDiary = async (dDay: any) => {
    const data = await getDoc(doc(db, "diary", dDay.toString()));
    if (data.exists()) {
      console.log("data 있다.", data.data());
      setDiaries(data.data());
    } else {
      console.log("데이터 없다.");
      setDiaries(dummyDiary);
    }
  };
  useEffect(() => {
    fetchDiary(dDay);
  }, [dDay]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h3>오늘의 일기</h3>
          <div key={diaries.dday}>
            {diaries.diary}
            <ToDoShowHeart heartNumber={diaries.heart} />
          </div>

          {/* {diaries.map((diary: any) => {
            if (diary.dday === dDay) {
              return (
           
            }
          })} */}
        </Grid>
        <Grid item xs={4}>
          <DiaryList />
        </Grid>
      </Grid>
    </>
  );
};

export default ToDoList;
