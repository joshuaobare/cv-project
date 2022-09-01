import React , {Component} from 'react';


class Overview extends Component {
    
    render(){
        const {names,email,number,school,degree,schoolStart,schoolEnd, company,position,roles,workStart,workEnd} = this.props


        return (
            <div>
                <h1>Details</h1>

                {names.map((name)=> {
                    return <p>Name: {name.text}</p>
                })}

                {email.map((emails)=> {
                    return <p>Email: {emails.text}</p>
                })}
                {number.map((numbers)=> {
                    return<p>Phone Number: {numbers.text}</p>
                })}

                <h2>Education</h2>

                {school.map((schools)=> {
                    return <p>School: {schools.text}</p>
                })}
                {degree.map((degrees)=> {
                    return <p>Degree: {degrees.text}</p>
                })}
                {schoolStart.map((schoolStarts)=> {
                    return <p>Start Date: {schoolStarts.text}</p>
                })}
                {schoolEnd.map((schoolEnds)=> {
                    return <p>End Date: {schoolEnds.text}</p>
                })}

                <h2>Work Experience</h2>
                {company.map((companies)=> {
                    return <p>Company: {companies.text}</p>
                })}
                {position.map((positions)=> {
                    return <p>Position: {positions.text}</p>
                })}
                {roles.map((role)=> {
                    return <p>Roles: {role.text}</p>
                })}
                {workStart.map((workStarts)=> {
                    return <p>Start Date: {workStarts.text}</p>
                })}
                {workEnd.map((workEnds)=> {
                    return <p>End Date: {workEnds.text}</p>
                })}
                 
                
            </div>
        )
    }

}

export default Overview