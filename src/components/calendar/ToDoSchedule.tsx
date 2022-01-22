import React from "react";

interface Date {
  day: number;
}

const Weekdays: Array<string> = ["월", "화", "수", "목", "금", "토", "일"];

export const ToDoSchedule = () => {
  return (
    <div className="todo-schedule-container">
      <div className="background-calendar"></div>
      <div>{Weekdays}</div>
    </div>
  );
};
