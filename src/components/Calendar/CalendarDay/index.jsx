import React from "react";

const CalendarDay = (props) => {
  const { dayNumber, currentDay, setCurrentDay } = props;
  const styles = {
    //border: isSelected ? "4px solid" : undefined,
    minWidth: "40px",
    backgroundColor: dayNumber === currentDay ? "gray" : undefined,
    //display: dayNumber ? "inline-block" : "none",
    opacity: dayNumber ? 1 : 0,
  };

  const updateCurrentDay = () => {
    setCurrentDay(dayNumber);
  };

  return (
    <button style={styles} onClick={dayNumber?updateCurrentDay:undefined}>
      {dayNumber}
    </button>
  );
};

export default CalendarDay;
