import React , {Component} from 'react';
import General from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';
import './index.css';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:{text: "",
    id:uniqid()},
      names : [],
      email:{text: "",
      id:uniqid()},
      emails : [],
      number : {text: "",
      id:uniqid()}, 
      numbers : [],    
      school:{text: "",
      id:uniqid()},
      schools : [],
      degree:{text: "",
      id:uniqid()},
      degrees : [],
      schoolStart:{text: "",
      id:uniqid()},
      schoolStarts : [],
      schoolEnd : {text: "",
      id:uniqid()},
      schoolEnds:[],
      company : {text: "",
      id:uniqid()},
      companies: [],     
      position:{text: "",
      id:uniqid()},
      positions:[],
      roles:{text: "",
      id:uniqid()},
      role:[],
      workStart:{text: "",
      id:uniqid()},
      workStarts:[],
      workEnd : {text: "",
      id:uniqid()},
      workEnds:[],
    
    
    }

  this.handleChange = this.handleChange.bind(this)
  this.onSubmitName = this.onSubmitName.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      name: {
        text: document.querySelector("#name").value , id: this.state.name.id
      },
      email: {
        text: document.querySelector("#email").value, id: this.state.email.id
      },
      number: {
        text: document.querySelector("#number").value, id: this.state.number.id
      },
      school: {
        text: document.querySelector("#school").value, id: this.state.school.id
      },
      degree: {
        text: document.querySelector("#degree").value, id: this.state.degree.id
      },
      schoolStart: {
        text: document.querySelector("#schoolStart").value, id: this.state.schoolStart.id
      },
      schoolEnd: {
      text: document.querySelector("#schoolEnd").value , id: this.state.schoolEnd.id
      },
      company: {
        text: document.querySelector("#company").value, id: this.state.company.id
      },
      position: {
        text: document.querySelector("#position").value, id: this.state.position.id
      },
      roles: {
        text: document.querySelector("#roles").value, id: this.state.roles.id
      },
      workStart: {
        text: document.querySelector("#workStart").value, id: this.state.workStart.id
      },
      workEnd: {
      text: document.querySelector("#workEnd").value , id: this.state.workEnd.id
      }
      
    })
  }

  onSubmitName = (e) => {
    e.preventDefault()
    this.setState({
      names: this.state.names.concat(this.state.name),
      emails:this.state.emails.concat(this.state.email),
      numbers:this.state.numbers.concat(this.state.number),
      schools:this.state.schools.concat(this.state.school),
      degrees:this.state.degrees.concat(this.state.degree),
      schoolStarts:this.state.schoolStarts.concat(this.state.schoolStart),
      schoolEnds:this.state.schoolEnds.concat(this.state.schoolEnd),
      companies:this.state.companies.concat(this.state.company),
      positions:this.state.positions.concat(this.state.position),
      role:this.state.role.concat(this.state.roles),
      workStarts:this.state.workStarts.concat(this.state.workStart),
      workEnds:this.state.workEnds.concat(this.state.workEnd),
      name:{text: "",id : uniqid()},
      email:{text: "",id : uniqid()},
      number : {text: "",id : uniqid()},     
      school:{text: "",id : uniqid()},
      degree:{text: "",id : uniqid()},
      schoolStart:{text: "",id : uniqid()},
      schoolEnd : {text: "",id : uniqid()},
      company : {text: "",id : uniqid()},     
      position:{text: "",id : uniqid()},
      roles:{text: "",id : uniqid()},
      workStart:{text: "",id : uniqid()},
      workEnd : {text: "",id : uniqid()}
    })
  }



  render() {

    const {name,names,email,emails,number,numbers, degree, degrees, school,schools,schoolStart,schoolStarts,schoolEnd,schoolEnds,
    company,companies,position,positions,roles,role,workStart,workStarts,workEnd,workEnds } = this.state

    return (
      <div className="App">
        <h1>CV PROJECT</h1>
        <General onChange={this.handleChange} nameValue={name.text} emailValue={email.text} numberValue={number.text} onSubmitName={this.onSubmitName}  />
        <Education onChange={this.handleChange} schoolName={school.text} degreeName={degree.text} schoolStart={schoolStart.text} schoolEnd={schoolEnd.text} onSubmitName={this.onSubmitName} />
        <Experience onChange={this.handleChange} company={company.text} position={position.text} roles={roles.text} workStart={workStart.text} workEnd={workEnd.text} onSubmitName={this.onSubmitName}/>
        <Overview names = {names} email={emails} number={numbers} school={schools} degree={degrees} schoolStart={schoolStarts} schoolEnd={schoolEnds}
        company={companies} position={positions} roles={role} workStart={workStarts} workEnd={workEnds}/>
      </div>
    );
  }
  
}

export default App;
