import React , {Component} from 'react';


class Overview extends Component {
    
    render(){
        const {names,email,number,school,degree,schoolStart,schoolEnd, company,position,roles,workStart,workEnd} = this.props


        return (
            <div>
                <h1>Details</h1>
                <p>Name: {names}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {number}</p>
                <h2>Education</h2>
                <p>School: {school}</p>
                <p>Degree: {degree}</p>
                <p>Start Date: {schoolStart}</p>
                <p>End Date: {schoolEnd}</p>
                <h2>Work Experience</h2>
                <p>Company: {company}</p>
                <p>Position: {position}</p>
                <p>Roles: {roles}</p>
                <p>Start Date: {workStart}</p>
                <p>End Date: {workEnd}</p>
                
            </div>
        )
    }

}

export default Overview