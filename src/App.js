import React , {Component} from 'react';
import General from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';
import './index.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name:{text: ""},
      email:{text: ""},
      number : {text: ""},     
      school:{text: ""},
      degree:{text: ""},
      schoolStart:{text: ""},
      schoolEnd : {text: ""},
      company : {text: ""},     
      position:{text: ""},
      roles:{text: ""},
      workStart:{text: ""},
      workEnd : {text: ""}
    
    
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
      },
      school: {
        text: document.querySelector("#school").value
      },
      degree: {
        text: document.querySelector("#degree").value
      },
      schoolStart: {
        text: document.querySelector("#school-start-date").value
      },
      schoolEnd: {
      text: document.querySelector("#school-end-date").value 
      },
      company: {
        text: document.querySelector("#company").value
      },
      position: {
        text: document.querySelector("#position").value
      },
      roles: {
        text: document.querySelector("#roles").value
      },
      workStart: {
        text: document.querySelector("#work-start-date").value
      },
      workEnd: {
      text: document.querySelector("#work-end-date").value 
      }
      
    })
  }

  onSubmitName = (e) => {
    e.preventDefault()
    /*this.setState({
      name:{text: ""},
      email:{text: ""},
      number : {text: ""},     
      school:{text: ""},
      degree:{text: ""},
      schoolStart:{text: ""},
      schoolEnd : {text: ""},
      company : {text: ""},     
      position:{text: ""},
      roles:{text: ""},
      workStart:{text: ""},
      workEnd : {text: ""}
    })*/
  }



  render() {

    const {name,email,number, degree,school,schoolStart,schoolEnd,company,position,roles,workStart,workEnd } = this.state

    return (
      <div className="App">
        <h1>CV PROJECT</h1>
        <General onChange={this.handleChange} nameValue={name.text} emailValue={email.text} numberValue={number.text} onSubmitName={this.onSubmitName}  />
        <Education onChange={this.handleChange} schoolName={school.text} degreeName={degree.text} schoolStart={schoolStart.text} schoolEnd={schoolEnd.text} onSubmitName={this.onSubmitName} />
        <Experience onChange={this.handleChange} company={company.text} position={position.text} roles={roles.text} workStart={workStart.text} workEnd={workEnd.text} onSubmitName={this.onSubmitName}/>
        <Overview names = {name.text} email={email.text} number={number.text} school={school.text} degree={degree.text} schoolStart={schoolStart.text} schoolEnd={schoolEnd.text}
        company={company.text} position={position.text} roles={roles.text} workStart={workStart.text} workEnd={workEnd.text}/>
      </div>
    );
  }
  
}

export default App;
