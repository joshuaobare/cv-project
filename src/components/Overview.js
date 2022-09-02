import React , {Component} from 'react';


class Overview extends Component {
    
    render(){
        const {names,email,number,school,degree,schoolStart,schoolEnd, company,position,roles,workStart,workEnd} = this.props

        console.log(names)
        return (
            <div>
                <h1>Details</h1>

                {names.map((name)=> {
                    if (name.text === ""){
                        return null
                    } else {
                        return <p key={name.id}>Name: {name.text}</p>
                    }

                    
                })}

                {email.map((emails)=> {

                    if (emails.text === ""){
                        return null
                    } else {
                        return <p key={emails.id}>Email: {emails.text}</p>
                    }

                    
                })}
                {number.map((numbers)=> {

                    if (numbers.text === ""){
                        return null
                    } else {
                        return<p key={numbers.id}>Phone Number: {numbers.text}</p>
                    }

                    
                })}

                <h2>Education</h2>

                {school.map((schools)=> {

                    if (schools.text === ""){
                        return null
                    } else {
                        return <p key={schools.id}>School: {schools.text}</p>
                    }

                    
                })}

                {degree.map((degrees)=> {

                    if (degrees.text === ""){
                        return null
                    } else {
                        return <p key={degrees.id}>Degree: {degrees.text}</p>
                    }                    
                })}

                {schoolStart.map((schoolStarts)=> {

                    if (schoolStarts.text === ""){
                        return null
                    } else {
                        return <p key={schoolStarts.id}>Start Date: {schoolStarts.text}</p>
                    }  
                })}

                {schoolEnd.map((schoolEnds)=> {

                    if (schoolEnds.text === ""){
                        return null
                    } else {
                        return <p key={schoolEnds.id}>End Date: {schoolEnds.text}</p>
                    }                    
                })}

                <h2>Work Experience</h2>
                {company.map((companies)=> {

                    if (companies.text === ""){
                        return null
                    } else {
                        return <p key={companies.id}>Company: {companies.text}</p>
                    }
                    
                })}

                {position.map((positions)=> {

                    if (positions.text === ""){
                        return null
                    } else {
                        return <p key={positions.id}>Position: {positions.text}</p>
                    }

                    
                })}
                {roles.map((role)=> {

                    if (role.text === ""){
                        return null
                    } else {
                        return <p key={role.id}>Roles: {role.text}</p>
                    }

                    
                })}

                {workStart.map((workStarts)=> {

                    if (workStarts.text === ""){
                        return null
                    } else {
                        return <p key={workStarts.id}>Start Date: {workStarts.text}</p>
                    }                    
                })}

                {workEnd.map((workEnds)=> {

                    if (workEnds.text === ""){
                        return null
                    } else {
                        return <p key={workEnds.id}>End Date: {workEnds.text}</p>
                    }                    
                })}                 
                
            </div>
        )
    }

}

export default Overview