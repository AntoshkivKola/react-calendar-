import React from "react";
import CalendarDay from "../CalendarDay";

const Month = (props) => {

  const {arrayOfDays,countWeksInMonth, currentDay,setCurrentDay} = props;


  const copyArrayOfDays = JSON.parse(JSON.stringify(arrayOfDays));
  const weeks = [];

  for (let i = 0; i < countWeksInMonth; i++) {
    weeks.push([]);
    for (let j = 0; j < 7; j++) {
      weeks[i].push(copyArrayOfDays.shift());
    }
  }

  return weeks.map((week) => {
    return (
      <div>
        {week.map((d) => {
          return (
            <CalendarDay
              dayNumber={d}
              currentDay={currentDay}
              setCurrentDay={setCurrentDay}
            />
          );
        })}
      </div>
    );
  });
   
};

export default Month;
