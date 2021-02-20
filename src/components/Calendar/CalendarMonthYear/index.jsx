import React, { Component } from "react";

class CalendarMonthYear extends Component {
  constructor(props) {
    super(props);
  }

  yearUp=()=>{
    const {setCurrentDay,currentDay,setDaysArray,setCurrentYear} = this.props;
    setDaysArray(1);
    setCurrentYear(true);
    setCurrentDay(currentDay);
    
  };
  yearDown=()=>{
    const {setCurrentDay,currentDay,setDaysArray,setCurrentYear} = this.props;
    setDaysArray(-1);
    setCurrentYear(false);
    setCurrentDay(currentDay);
   
  };

  handleChangeMonth=({target:{value}})=>{
    const {setCurrentMonth,setDaysArray}= this.props;
    setDaysArray(0,value);

  };

  render() {
   
    const {currentYear, months,currentMonth} = this.props;
    const mothsRender=months.map((month, index)=>{
      return <option value={index}>{month}</option>
    })
    return (
      <div>
        <button onClick={this.yearDown}>{'<'}</button>
        <h1>{currentYear} {months[currentMonth]}</h1>
        <button onClick={this.yearUp}>{'>'}</button>
        <select value={currentMonth} onChange={this.handleChangeMonth}>
          {mothsRender}
          </select>
      </div>
    );
  }
}

export default CalendarMonthYear;
