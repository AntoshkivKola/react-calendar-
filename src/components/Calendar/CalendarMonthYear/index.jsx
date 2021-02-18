import React, { Component } from "react";

class CalendarMonthYear extends Component {
  constructor(props) {
    super(props);
  }

  yearUp=()=>{
    const {setCurrentDay,currentDay,setDaysArray} = this.props;
    setDaysArray(true);
    //setCurrentYear(true);
    setCurrentDay(currentDay);
    
  }
  yearDown=()=>{
    const {setCurrentDay,currentDay,setDaysArray} = this.props;
    setDaysArray(false);
    //setCurrentYear(false);
    setCurrentDay(currentDay);
   
  }
  render() {
   
    const {currentYear} = this.props;
    return (
      <div>
        <button onClick={this.yearDown}>{'<'}</button>
        <h1>{currentYear}</h1>
        <button onClick={this.yearUp}>{'>'}</button>
      </div>
    );
  }
}

export default CalendarMonthYear;
