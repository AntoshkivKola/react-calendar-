import React from "react";
import { format } from "date-fns";
import styles from "./CurrentDay.module.scss";
import PropTypes from 'prop-types';

const CurrentDay = (props) => {
  const { date, currentDay } = props;
  return (
    <>
      <p className={styles.dayWord}>{format(date, "EEEE")} </p>
      <div className={styles.wrapperDayNamber}>
        <p className={styles.dayNumber}>{currentDay}</p>
      </div>
    </>
  );
};

CurrentDay.propTypes = {
  date: PropTypes.object.isRequired,
  currentDay: PropTypes.number,
}

export default CurrentDay;
