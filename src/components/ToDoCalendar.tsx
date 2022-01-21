import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../app/services/counterSlice";
import { RootState } from "../app/store";

const TodoCalendar = () => {
  const [date, setDate] = useState(new Date());
  const dDay = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const changeDate = (amount: any) => {
    dispatch(incrementByAmount(amount.getTime()));
    setDate(date);
  };
  return (
    <div>
      <Calendar
        onClickDay={changeDate}
        value={date}
        className="react-calendar"
      />
      {date.getTime()}
      <h3>hi</h3>
      <h3>{dDay}</h3>
    </div>
  );
};

export default TodoCalendar;
