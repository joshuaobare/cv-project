import React , {Component} from 'react';


class Experience extends Component {
    
    render(){

        const {onChange , onSubmitName, company,position,roles,workStart,workEnd} = this.props

        return (
            <div>
                <form onSubmit={onSubmitName}>
                    <label htmlFor="company">Company Name: </label>
                    <input onChange={onChange} value={company} type="text" id="company"/>
                    <label htmlFor="position">Position: </label>
                    <input onChange={onChange} value={position} type="text" id="position"/>
                    <label htmlFor="roles">Roles: </label>
                    <input onChange={onChange} value={roles} type="text" id="roles"/>
                    <label htmlFor="work-start-date">Start date: </label>
                    <input onChange={onChange} value={workStart} type="date" id="work-start-date"/>
                    <label htmlFor="work-end-date">End date: </label>
                    <input onChange={onChange} value={workEnd} type="date" id="work-end-date"/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default Experience