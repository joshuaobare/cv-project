import React , {Component} from 'react';


class Overview extends Component {
    
    render(){
        const {info,education,experience} = this.props

        return (
            <div>
                <h1>Details</h1>

                {
                    info.map((data,i) => {
                        if (data.text === "") {
                            return null
                        }else {
                          return <p key={data.id}>{data.title}: {data.text}</p>}
                        
                    })
                }


                <h2>Education</h2>

                {
                    education.map((data,i) => {
                        if(data.text === "") {
                            return null
                        } else {
                            return <p key={data.id}>{data.title}: {data.text}</p>
                        } 
                    })
                }

                <h2>Work Experience</h2>

                {
                    experience.map((data,i) => {
                        if(data.text === "") {
                            return null
                        } else {
                            return <p key={data.id}>{data.title}: {data.text}</p>
                        }                                     
                        
                    })
                }                              

            </div>
        )
    }

}

export default Overview