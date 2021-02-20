import React, { Component } from "react";
import {
  format,
  addDays,
  getDay,
  getDate,
  differenceInCalendarWeeks,
  getDaysInMonth,
  getMonth,
  getYear,
  setMonth,
  getWeeksInMonth,
} from "date-fns";
import CalendarDay from "../CalendarDay";
import CurrentDay from "../CurrentDay";
import CalendarMonthYear from "../CalendarMonthYear";
import Month from "../Month";

//====================================
const currentDate = new Date();
const currentMonth = getMonth(currentDate);
const currentYear = getYear(currentDate);
const countDaysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));
const numOfFirstDay = getDay(new Date(currentYear, currentMonth, 1));
const numOfLastDay = getDay(
  new Date(currentYear, currentMonth, countDaysInMonth)
);
const allDaysInMonth = countDaysInMonth + numOfFirstDay + (6 - numOfLastDay);
const countWeksInMonth = allDaysInMonth / 7;

const getDaysArray = () => {
  const arrayOfDays = [];
  for (let i = 0; i < numOfFirstDay; i++) {
    arrayOfDays.push(undefined);
  }
  for (let i = 1; i <= countDaysInMonth; i++) {
    arrayOfDays.push(i);
  }
  for (let i = 0; i < 6 - numOfLastDay; i++) {
    arrayOfDays.push(undefined);
  }
  return arrayOfDays;
};

//====================================

class CalendarChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDay: getDate(currentDate),
      currentYear: currentYear,
      currentMonth: currentMonth,

      currentDate: new Date(),
      arrayOfDays: getDaysArray(),
      numOfFirstDay: numOfFirstDay,
      numOfLastDay: numOfLastDay,
      countWeksInMonth: countWeksInMonth,
    };
  }

  setFirstDay = (firstDay) => {
    this.setState({ numOfFirstDay: firstDay });
  };
  setLastDay = (lastDay) => {
    this.setState({ numOfLastDay: lastDay });
  };

  setCurrentYear = (direction) => {
    if (direction) {
      return this.setState((state) => {
        return { currentYear: state.currentYear + 1 };
      });
    }
    return this.setState((state) => {
      return { currentYear: state.currentYear - 1 };
    });
  };

  setCountWeksInMonth = (newCountWeksInMonth) => {
    this.setState({ countWeksInMonth: newCountWeksInMonth });
  };

  newAarray = (correction = 0, month = this.state.currentMonth) => {
    const currentMonth = month;
    const currentYear = this.state.currentYear + correction;
    const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));
    const numOfFirstDay = getDay(new Date(currentYear, currentMonth, 1));
    const numOfLastDay = getDay(
      new Date(currentYear, currentMonth, daysInMonth)
    );

    this.setCurrentMonth(month);
    this.setFirstDay(getDay(new Date(currentYear, currentMonth, 1)));
    this.setLastDay(getDay(new Date(currentYear, currentMonth, daysInMonth)));
    this.setCountWeksInMonth(
      getWeeksInMonth(new Date(currentYear, currentMonth))
    );

    const arrayOfDays = [];
    for (let i = 0; i < numOfFirstDay; i++) {
      arrayOfDays.push(undefined);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      arrayOfDays.push(i);
    }
    for (let i = 0; i < 6 - numOfLastDay; i++) {
      arrayOfDays.push(undefined);
    }
    return arrayOfDays;
  };

  setDaysArray = (correction = 0, month) => {
    return this.setState({ arrayOfDays: this.newAarray(correction, month) });
  };

  setCurrentDay = (day) => {
    this.setState({ currentDay: day });
  };

  setCurrentMonth = (month) => {
    this.setState({ currentMonth: month });
  };

  convertDay = () => {
    const { convertNumDayToStr } = this.props;
    const { currentDay, currentYear } = this.state;

    return convertNumDayToStr(
      getDay(new Date(currentYear, currentMonth, currentDay))
    );
  };

  render() {
    const { months } = this.props;

    const {
      currentDay,
      currentYear,
      currentMonth,
      arrayOfDays,
      countWeksInMonth,
    } = this.state;

    return (
      <div>
        <CalendarMonthYear
          currentYear={currentYear}
          setCurrentDay={this.setCurrentDay}
          setCurrentYear={this.setCurrentYear}
          currentDay={currentDay}
          setDaysArray={this.setDaysArray}
          months={months}
          currentMonth={currentMonth}
          setCurrentMonth={this.setCurrentMonth}
        />
        <h3>{`S.....M.....T.....W.....T.....F.....S`}</h3>
        <Month
          arrayOfDays={arrayOfDays}
          countWeksInMonth={countWeksInMonth}
          currentDay={currentDay}
          setCurrentDay={this.setCurrentDay}
        />

        <CurrentDay
          date={new Date(currentYear, currentMonth, currentDay)}
          currentDay={currentDay}
        />
      </div>
    );
  }
}

export default CalendarChange;
