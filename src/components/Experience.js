import React , {Component} from 'react';


class Experience extends Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                <form>
                    <label htmlFor="company">Company Name: </label>
                    <input type="text" id="company"/>
                    <label htmlFor="position">Position: </label>
                    <input type="text" id="position"/>
                    <label htmlFor="tasks">Tasks: </label>
                    <input type="text" id="tasks"/>
                    <label htmlFor="start-date">Start date: </label>
                    <input type="date" id="start-date"/>
                    <label htmlFor="end-date">End date: </label>
                    <input type="date" id="end-date"/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default Experience