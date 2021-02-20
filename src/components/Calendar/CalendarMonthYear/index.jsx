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
        <h1>{currentYear}</h1>
        <button onClick={this.yearUp}>{'>'}</button>
        <select value={currentMonth} onChange={this.handleChangeMonth}>
          {mothsRender}

            {/* <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
          </select>
      </div>
    );
  }
}

export default CalendarMonthYear;
