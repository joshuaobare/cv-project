import React , {Component} from 'react';


class Education extends Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                <form>
                    <label htmlFor="school">School Name: </label>
                    <input type="text" id="school"/>
                    <label htmlFor="degree">Degree: </label>
                    <input type="text" id="degree"/>
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

export default Education