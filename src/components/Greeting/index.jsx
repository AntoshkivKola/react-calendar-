import { Component } from "react";

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchState = () => {
    const { isGreeting } = this.state;

    this.setState({ isGreeting: !isGreeting });
  };

  render() {
    const { name, age } = this.props;
    const { isGreeting } = this.state;
    let ageMsg;
    if (age > 90) {
      ageMsg = "You so OLD";
    } else {
      ageMsg = "ok";
    }

    return (
      <>
        <h1>
          {isGreeting ? "Hello" : "Goodbye"}, {name} Yooou! {ageMsg}
        </h1>
        <button onClick={this.switchState}>Switch</button>
      </>
    );
  }
}

export default Aloha;
