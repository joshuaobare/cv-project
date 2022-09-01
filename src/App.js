import React , {Component} from 'react';
import General from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:{text: ""},
      names : [],
      email:{text: ""},
      emails : [],
      number : {text: ""}, 
      numbers : [],    
      school:{text: ""},
      schools : [],
      degree:{text: ""},
      degrees : [],
      schoolStart:{text: ""},
      schoolStarts : [],
      schoolEnd : {text: ""},
      schoolEnds:[],
      company : {text: ""},
      companies: [],     
      position:{text: ""},
      positions:[],
      roles:{text: ""},
      role:[],
      workStart:{text: ""},
      workStarts:[],
      workEnd : {text: ""},
      workEnds:[],
    
    
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
        text: document.querySelector("#schoolStart").value
      },
      schoolEnd: {
      text: document.querySelector("#schoolEnd").value 
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
        text: document.querySelector("#workStart").value
      },
      workEnd: {
      text: document.querySelector("#workEnd").value 
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




      /*name:{text: ""},
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
      workEnd : {text: ""}*/
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
