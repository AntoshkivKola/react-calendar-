import React from "react";
import CalendarDay from "../CalendarDay";
import styles from "./Month.module.scss";
import PropTypes from 'prop-types';

const Month = (props) => {

  const {arrayOfDays,countWeksInMonth, currentDay,setCurrentDay} = props;
  console.dir(setCurrentDay)

  const copyArrayOfDays = JSON.parse(JSON.stringify(arrayOfDays));
  const month = [];

  for (let i = 0; i < countWeksInMonth; i++) {
    month.push([]);
    for (let j = 0; j < 7; j++) {
      month[i].push(copyArrayOfDays.shift());
    }
  }

  return month.map((week) => {
    return (
      <div className={styles.week}>
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

Month.propTypes = {
  arrayOfDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  countWeksInMonth: PropTypes.number.isRequired,
  currentDay: PropTypes.number,
  setCurrentDay: PropTypes.func,
}

export default Month;
