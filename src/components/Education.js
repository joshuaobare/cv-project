import React , {Component} from 'react';


class Education extends Component {
    

    render(){

        const {schoolName , onChange , onSubmitName, degreeName ,schoolStart,schoolEnd} = this.props
        
        return (
            <div>
                <form onSubmit={onSubmitName}>
                    <label htmlFor="school">School Name: </label>
                    <input onChange={onChange} value={schoolName} type="text" id="school"/>
                    <label htmlFor="degree">Degree: </label>
                    <input onChange={onChange} value={degreeName} type="text" id="degree"/>
                    <label htmlFor="school-start-date">Start date: </label>
                    <input onChange={onChange} value={schoolStart} type="date" id="school-start-date"/>
                    <label htmlFor="school-end-date">End date: </label>
                    <input onChange={onChange} value={schoolEnd} type="date" id="school-end-date"/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default Education