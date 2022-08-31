import React , {Component} from 'react';
import General from './components/GeneralInfo';
//import Education from './components/Education';
//import Experience from './components/Experience';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name:{text: ""}
      
  }

  this.handleChange = this.handleChange.bind(this)
  this.onSubmitName = this.onSubmitName.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      name: {
        text: e.target.value
      }
    })
  }

  onSubmitName = (e) => {
    e.preventDefault()
    this.setState({
      name : {
        text: ""
      }
    })
  }



  render() {

    //const {name} = this.state

    return (
      <div className="App">
        <h1>CV PROJECT</h1>
        <General onChange={this.handleChange} value={this.state.name.text} onSubmitName={this.onSubmitName}  />
        {/*<Education />
        <Experience />*/ }
        <Overview names = {this.state.name.text}/>
      </div>
    );
  }
  
}

export default App;
