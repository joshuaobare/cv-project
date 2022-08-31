import React , {Component} from 'react';
import General from './components/GeneralInfo';
//import Education from './components/Education';
//import Experience from './components/Experience';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name:{text: ""},
      email:{text: ""},
      number : {text: ""}     
    }

  this.handleChange = this.handleChange.bind(this)
  this.onSubmitName = this.onSubmitName.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      name: {
        text: document.querySelector("#name").value
      },
      email: {
        text: document.querySelector("#email").value
      },
      number: {
        text: document.querySelector("#number").value
      }
    })
  }

  onSubmitName = (e) => {
    e.preventDefault()
    this.setState({
      name:{text: ""},
      email:{text: ""},
      number : {text: ""} 
    })
  }



  render() {

    const {name,email,number} = this.state

    return (
      <div className="App">
        <h1>CV PROJECT</h1>
        <General onChange={this.handleChange} nameValue={name.text} emailValue={email.text} numberValue={number.text} onSubmitName={this.onSubmitName}  />
        {/*<Education />
        <Experience />*/ }
        <Overview names = {this.state.name.text} email={this.state.email.text} number={this.state.number.text}/>
      </div>
    );
  }
  
}

export default App;
