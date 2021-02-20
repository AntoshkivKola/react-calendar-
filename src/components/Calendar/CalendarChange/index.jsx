import React, { Component } from "react";
import {
  addDays,
  getDay,
  getDate,
  differenceInCalendarWeeks,
  getDaysInMonth,
  getMonth,
  getYear,
  setMonth,
} from "date-fns";
import CalendarDay from "../CalendarDay";
import CalendarMonthYear from "../CalendarMonthYear";

//====================================
const currentDate = new Date();
const currentMonth = getMonth(currentDate);
const newMonth = getMonth(setMonth(currentDate, currentMonth + 15));
const currentYear = getYear(currentDate);
const countDaysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));
const numOfFirstDay = getDay(new Date(currentYear, currentMonth, 1));
const numOfLastDay = getDay(
  new Date(currentYear, currentMonth, countDaysInMonth)
);
const numOfCarrentDay = getDay(new Date());
// const countWeksInMonth = differenceInCalendarWeeks(
//   new Date(2021, 1, countDaysInMonth),
//   new Date(2021, 1, 0)
// );

const allDaysInMonth = countDaysInMonth + numOfFirstDay + (6 - numOfLastDay);
const countWeksInMonth = allDaysInMonth / 7;

const getSetDaysArray = () => {
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
      carrentDay: getDate(currentDate),
      currentYear: currentYear,
      currentMonth: currentMonth,
      arrayOfDays: getSetDaysArray(),
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

    this.setCurrentMonth(month);

    const currentYear = this.state.currentYear + correction;
    console.log(currentYear);
    const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));

    this.setFirstDay(getDay(new Date(currentYear, currentMonth, 1)));
    this.setLastDay(getDay(new Date(currentYear, currentMonth, daysInMonth)));
    // const {  numOfLastDay } = this.state;
    const numOfFirstDay = getDay(new Date(currentYear, currentMonth, 1));
    const numOfLastDay = getDay(
      new Date(currentYear, currentMonth, daysInMonth)
    );

    this.setCountWeksInMonth(
      (countDaysInMonth + numOfFirstDay + (6 - numOfLastDay)) / 7
    );
    console.log(numOfFirstDay);
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
    const { currentYear } = this.state;
    //const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));

    //const { numOfFirstDay, numOfLastDay } = this.state;
    //console.log(numOfFirstDay);

    //console.log(this.newAarray());
    //this.newAarray();
    console.log("L: " + currentYear);

    return this.setState({ arrayOfDays: this.newAarray(correction, month) });
  };

  setCurrentDay = (day) => {
    this.setState({ carrentDay: day });
  };

  setCurrentMonth = (month) => {
    this.setState({ currentMonth: month });
  };

  convertDay = () => {
    const { convertNumDayToStr } = this.props;
    const { carrentDay, currentYear } = this.state;

    return convertNumDayToStr(
      getDay(new Date(currentYear, currentMonth, carrentDay))
    );
  };

  render() {
    const { months } = this.props;

    const {
      carrentDay,
      currentYear,
      currentMonth,
      arrayOfDays,
      numOfFirstDay,
      numOfLastDay,
      countWeksInMonth
    } = this.state;

    const copyArrayOfDays = JSON.parse(JSON.stringify(arrayOfDays));
    const weeklees = [];

    for (let i = 0; i < countWeksInMonth; i++) {
      weeklees.push([]);
      for (let j = 0; j < 7; j++) {
        weeklees[i].push(copyArrayOfDays.shift());
      }
    }

    const daysArray = weeklees.map((week) => {
      return (
        <div>
          {week.map((d) => {
            return (
              <CalendarDay
                dayNumber={d}
                currentDay={carrentDay}
                setCurrentDay={this.setCurrentDay}
              />
            );
          })}
        </div>
      );
    });

    return (
      <div>
        {`numOfCarrentDay: ${numOfCarrentDay}\t`}
        {`numOfFirstDay: ${numOfFirstDay}\t`}
        {`numOfLastDay: ${numOfLastDay}\t`}
        <hr />
        {`countDaysInMonth: ${countDaysInMonth}\n`}
        {`allDaysInMonth: ${allDaysInMonth}\n`}
        {`currentMonth: ${currentMonth}\n`}
        {`newMonth: ${newMonth}\n`}
        <hr />
        <h3>{`S.....M.....T.....W.....T.....F.....S`}</h3>
        {daysArray}

        <h2>{`${this.convertDay()} ${carrentDay}`}</h2>
        <CalendarMonthYear
          currentYear={currentYear}
          setCurrentDay={this.setCurrentDay}
          setCurrentYear={this.setCurrentYear}
          currentDay={carrentDay}
          setDaysArray={this.setDaysArray}
          months={months}
          currentMonth={currentMonth}
          setCurrentMonth={this.setCurrentMonth}
        />
      </div>
    );
  }
}

export default CalendarChange;
