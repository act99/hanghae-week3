import React, { useState } from "react";
import Calendar from "react-calendar";
import "../assets/styles/calendarcss.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../app/services/counterSlice";
import { RootState } from "../app/store";
import { Typography } from "@mui/material";

const TodoCalendar = () => {
  const [date, setDate] = useState(new Date());
  const dDay = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const changeDate = (amount: any) => {
    dispatch(incrementByAmount(amount.getTime()));
    setDate(amount);
  };
  return (
    <div
      className="background-calendar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" component="h2">
        Calendar
      </Typography>
      <Calendar
        onClickDay={changeDate}
        value={date}
        className="react-calendar"
      />
      <h3>{dDay}</h3>
    </div>
  );
};

export default TodoCalendar;
