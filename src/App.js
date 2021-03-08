import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
class App extends React.Component {
state={advice:''};

componentDidMount(){
  this.Fadvice();
}
 Fadvice = () => {
axios.get('https://api.adviceslip.com/advice').then( res=> {this.setState({advice:res.data.slip.advice})})
.catch(Error=>{console.log(Error);})
  }


  render() {
    return (
  
    <div className="App">
      <h3>{this.state.advice}</h3>
      <button  class="btn" onClick={this.Fadvice}>click</button>
    </div>
  );
}
}

export default App;
