import React, { Component } from "react";
import {
  getDay,
  getDate,
  getDaysInMonth,
  getMonth,
  getYear,
  getWeeksInMonth,
} from "date-fns";
import PropTypes from "prop-types";
import CurrentDay from "../CurrentDay";
import CalendarMonthYear from "../CalendarMonthYear";
import Month from "../Month";
import styles from "./CalendarChange.module.scss";

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
    const { currentDay } = this.state;
    const currentMonth = month;
    const currentYear = this.state.currentYear + correction;
    const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));
    const numOfFirstDay = getDay(new Date(currentYear, currentMonth, 1));
    const numOfLastDay = getDay(
      new Date(currentYear, currentMonth, daysInMonth)
    );
    this.setCurrentDay(currentDay);
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
      <div className={styles.container}>
        <div className={styles.currentDay}>
          <CurrentDay
            date={new Date(currentYear, currentMonth, currentDay)}
            currentDay={currentDay}
          />
        </div>
        <div className={styles.changeDate}>
          <CalendarMonthYear
            currentYear={currentYear}
            setCurrentYear={this.setCurrentYear}
            setDaysArray={this.setDaysArray}
            months={months}
            currentMonth={currentMonth}
            setCurrentMonth={this.setCurrentMonth}
          />
          <div className={styles.days}>
            <h3>S</h3>
            <h3>M</h3>
            <h3>T</h3>
            <h3>W</h3>
            <h3>T</h3>
            <h3>F</h3>
            <h3>S</h3>
          </div>
          <div className={styles.month}>
            <Month
              arrayOfDays={arrayOfDays}
              countWeksInMonth={countWeksInMonth}
              currentDay={currentDay}
              setCurrentDay={this.setCurrentDay}
            />
          </div>
        </div>
      </div>
    );
  }
}
CalendarChange.propTypes = {
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  convertNumDayToStr: PropTypes.func.isRequired,
};
export default CalendarChange;
