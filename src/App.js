import React , {Component} from 'react';
import General from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super()
  }



  render() {
    return (
      <div className="App">
        <h1>CV PROJECT</h1>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
  
}

export default App;
