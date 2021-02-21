import React from "react";
import styles from "./CalendarMonthYear.module.scss";
import PropTypes from "prop-types";

function CalendarMonthYear(props) {
  const yearUp = () => {
    const { setDaysArray, setCurrentYear } = props;
    setDaysArray(1);
    setCurrentYear(true);
  };
  const yearDown = () => {
    const { setDaysArray, setCurrentYear } = props;
    setDaysArray(-1);
    setCurrentYear(false);
  };

  const handleChangeMonth = ({ target: { value } }) => {
    const { setDaysArray } = props;
    setDaysArray(0, value);
  };

  const { currentYear, months, currentMonth } = props;
  const mothsRender = months.map((month, index) => {
    return <option value={index}>{month}</option>;
  });
  return (
    <div className={styles.constainer}>
      <select
        className={styles.month}
        value={currentMonth}
        onChange={handleChangeMonth}
      >
        {mothsRender}
      </select>
      <div>
        <button className={styles.yearBtn} onClick={yearUp}>
          {"<"}
        </button>
        <h1 className={styles.year}>{currentYear}</h1>
        <button className={styles.yearBtn} onClick={yearDown}>
          {">"}
        </button>
      </div>
    </div>
  );
}

CalendarMonthYear.propTypes = {
  currentYear: PropTypes.number.isRequired,
  setCurrentYear: PropTypes.func.isRequired,
  setDaysArray: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.string),
  currentMonth: PropTypes.number,
  setCurrentMonth: PropTypes.func,
 
};

export default CalendarMonthYear;
