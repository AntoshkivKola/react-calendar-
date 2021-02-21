import React from "react";
import styles from "./CalendarDay.module.scss";
import PropTypes from "prop-types";

const CalendarDay = (props) => {
  const { dayNumber, currentDay, setCurrentDay } = props;
 
  const updateCurrentDay = () => {
    setCurrentDay(dayNumber);
  };

  return (
    <button
      className={`${dayNumber ? styles.day : styles.noneDay} ${
        dayNumber === currentDay ? styles.currentDay : ""
      }`}
      onClick={dayNumber ? updateCurrentDay : undefined}
    >
      {dayNumber}
    </button>
  );
};

CalendarDay.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  currentDay: PropTypes.number,
  setCurrentDay: PropTypes.func,
}

export default CalendarDay;
