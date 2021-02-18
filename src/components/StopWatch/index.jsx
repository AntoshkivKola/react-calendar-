import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      isGoing: true,
    };
    this.timerId = null;
  }

  tick = () => {
    const { time } = this.state;
    time.setSeconds(time.getSeconds() + 1);
    this.setState({ time });

    this.stop();
    this.start();
  };

  start = () => {
    if (!this.timerId) {
      this.timerId = setTimeout(this.tick, 1000);
    }
    this.setState({ isGoing: true });
  };

  handlerClick = () => {
    const { isGoing} = this.state;
    this.setState({ isGoing: !isGoing });
    if(isGoing){
      this.start();
    }else{
      
      this.reset();
    }
    console.log(isGoing);
  }

  pause = () => {
    this.stop();
    this.setState({ isGoing: false });
  };

  stop = () => {
    clearTimeout(this.timerId);
    this.timerId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    this.setState({ isGoing: false });
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.reset();
  }

  render() {
    const { time, isGoing } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString("it-IT")}</h1>
        {isGoing ? (
          <>
            <button onClick={this.reset}>Stop</button>
            <button onClick={this.pause}>Pause</button>
          </>
        ) : (
          <button onClick={this.start}>Start</button>
        )}
      </article>
    );
  }
}

export default StopWatch;
