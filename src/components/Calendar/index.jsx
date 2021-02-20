import React from "react";
import CalendarChange from "./CalendarChange";

const dayNames = new Map();
dayNames.set(0, "Sunday");
dayNames.set(1, "Monday");
dayNames.set(2, "Tuesday");
dayNames.set(3, "Wendnesday");
dayNames.set(4, "Thursday");
dayNames.set(5, "Friday");
dayNames.set(6, "Saturday");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Calendar(props) {
  const convertNumDayToStr = (dayNum) => {
    if (dayNames.has(dayNum)) {
      return dayNames.get(dayNum);
    }
    return "ERROR";
  };

  return (
    <section className="calendar">
      <CalendarChange convertNumDayToStr={convertNumDayToStr} months={months} />
    </section>
  );
}

export default Calendar;
