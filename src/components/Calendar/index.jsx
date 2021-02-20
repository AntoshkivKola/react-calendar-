import React, { Component } from "react";
import CalendarChange from "./CalendarChange";

const dayNames = new Map();
dayNames.set(0, "Sunday");
dayNames.set(1, "Monday");
dayNames.set(2, "Tuesday");
dayNames.set(3, "Wendnesday");
dayNames.set(4, "Thursday");
dayNames.set(5, "Friday");
dayNames.set(6, "Saturday");
const months = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November",  "December"];

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  convertNumDayToStr = (dayNum) => {
    //console.log(dayNum)

    if (dayNames.has(dayNum)) {
      return dayNames.get(dayNum);
    }
    return "ERROR";
  };

  render() {
    return (
      <section className="calendar">
        <CalendarChange convertNumDayToStr={this.convertNumDayToStr} months={months}/>
      </section>
    );
  }
}

export default Calendar;
