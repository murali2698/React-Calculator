import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './components/Keypad'
import Result from './components/Result'






class App extends React.Component {


  constructor(props) {
    super(props)
  
    this.state = {
       result : ""
    }
  }
  

  
  onClick = button => {
    
    if (button === "="){
      this.calculate()
    }else if(button === "CE"){
      this.backspace()
    }else if(button === "C"){
      this.Reset()
    }else{
      this.setState({
        result : this.state.result + button
      });
    }
    console.log(this.state.result);
    
  }

  calculate = () => {
    var checkResult = ""
    if(this.state.result.includes("--")){
      checkResult = this.state.result.replace('--','+')
    }else{
      checkResult = this.state.result
    }
    try{  
      this.setState({
        result : (eval(checkResult) || "") + ""
      });
    }catch(e){
      this.setState({
        result: "error"
      });
    }
  }

  Reset = () => {
    this.setState({
      result : ""
    })
  }

  backspace = () => {
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  }


  render(){
    return (
      <div className="App">
        <h1>Simple Calculator</h1>
        <Result result={this.state.result} />
        <Keypad calc={this.onClick} />
      </div>
    );
  }
}

export default App;
