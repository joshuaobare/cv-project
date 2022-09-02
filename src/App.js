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
      id:uniqid(),
    title:"Name"},
      info : [],
      email:{text: "",
      id:uniqid(),
    title:"Email"},
      
      number : {text: "",
      id:uniqid(),
    title:"Number"}, 
          
      school:{text: "",
      id:uniqid(),
    title:"School"},
      education : [],
      degree:{text: "",
      id:uniqid(),
    title:"Degree"},
      
      schoolStart:{text: "",
      id:uniqid(),
    title:"Start Date"},
      
      schoolEnd : {text: "",
      id:uniqid(),
    title:"End Date"},
      
      company : {text: "",
      id:uniqid(),
    title:"Company"},
      experience: [],     
      position:{text: "",
      id:uniqid(),
    title:"Position"},
      
      roles:{text: "",
      id:uniqid(),
    title:"Roles"},
      
      workStart:{text: "",
      id:uniqid(),
    title:"Start Date"},
     
      workEnd : {text: "",
      id:uniqid(),
    title: "End Date"}
      
    
    
    }

  this.handleChange = this.handleChange.bind(this)
  this.onSubmitName = this.onSubmitName.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      name: {
        text: document.querySelector("#name").value , id: this.state.name.id, title:this.state.name.title
      },
      email: {
        text: document.querySelector("#email").value, id: this.state.email.id, title:this.state.email.title
      },
      number: {
        text: document.querySelector("#number").value, id: this.state.number.id, title:this.state.number.title
      },
      school: {
        text: document.querySelector("#school").value, id: this.state.school.id, title:this.state.school.title
      },
      degree: {
        text: document.querySelector("#degree").value, id: this.state.degree.id, title:this.state.degree.title
      },
      schoolStart: {
        text: document.querySelector("#schoolStart").value, id: this.state.schoolStart.id, title:this.state.schoolStart.title
      },
      schoolEnd: {
      text: document.querySelector("#schoolEnd").value , id: this.state.schoolEnd.id, title:this.state.schoolEnd.title
      },
      company: {
        text: document.querySelector("#company").value, id: this.state.company.id, title:this.state.company.title
      },
      position: {
        text: document.querySelector("#position").value, id: this.state.position.id, title:this.state.position.title
      },
      roles: {
        text: document.querySelector("#roles").value, id: this.state.roles.id, title:this.state.roles.title
      },
      workStart: {
        text: document.querySelector("#workStart").value, id: this.state.workStart.id, title:this.state.workStart.title
      },
      workEnd: {
      text: document.querySelector("#workEnd").value , id: this.state.workEnd.id, title:this.state.workEnd.title
      }
      
    })
  }

  onSubmitName = (e) => {
    e.preventDefault()
    this.setState({
      
      info: this.state.info.concat(this.state.name,this.state.email,this.state.number),      
      education:this.state.education.concat(this.state.school,this.state.degree,this.state.schoolStart,this.state.schoolEnd),
      experience:this.state.experience.concat(this.state.company,this.state.position,this.state.roles,this.state.workStart,this.state.workEnd),
      name:{text: "",id : uniqid(),title:"Name"},
      email:{text: "",id : uniqid(),title:"Email"},
      number : {text: "",id : uniqid(),title:"Number"},     
      school:{text: "",id : uniqid(),title:"School"},
      degree:{text: "",id : uniqid(),title:"Degree"},
      schoolStart:{text: "",id : uniqid(),title:"Start Date"},
      schoolEnd : {text: "",id : uniqid(),title:"End Date"},
      company : {text: "",id : uniqid(),title:"Company"},     
      position:{text: "",id : uniqid(),title:"Position"},
      roles:{text: "",id : uniqid(),title:"Roles"},
      workStart:{text: "",id : uniqid(),title:"Start Date"},
      workEnd : {text: "",id : uniqid(),title:"End Date"}
    })
  }



  render() {
    const {name,email,number,degree,school,schoolStart,schoolEnd,
      company,position,roles,workStart,workEnd , info, experience,education } = this.state

    return (
      <div className="App">
        <h1>CV PROJECT</h1>
        <General onChange={this.handleChange} nameValue={name.text} emailValue={email.text} numberValue={number.text} onSubmitName={this.onSubmitName}  />
        <Education onChange={this.handleChange} schoolName={school.text} degreeName={degree.text} schoolStart={schoolStart.text} schoolEnd={schoolEnd.text} onSubmitName={this.onSubmitName} />
        <Experience onChange={this.handleChange} company={company.text} position={position.text} roles={roles.text} workStart={workStart.text} workEnd={workEnd.text} onSubmitName={this.onSubmitName}/>
        <Overview info = {info} experience = {experience} education = {education} />
        
      </div>
    );
  }
  
}

export default App;
