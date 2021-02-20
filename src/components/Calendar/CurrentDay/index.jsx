import React from "react";
import { format } from "date-fns";

const CurrentDay = (props) => {
  const { date,currentDay } = props;
  return (
    <h2>{`${format(date,"EEEE")} ${currentDay}`}</h2>
  );
};

export default CurrentDay;
