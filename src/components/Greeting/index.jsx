import { Component } from "react";

class Greeting extends Component {
  render() {
    const { name } = this.props;
    const { age } = this.props;
    let ageMsg;
    if(age > 90){
      ageMsg = 'You so OLD';
    }else{
      ageMsg='ok';
    }
    
    return <h1>Hello, {name} Yooou! {ageMsg}</h1>;
  }
}

export default Greeting;
