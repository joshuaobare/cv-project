import React , {Component} from 'react';


class Overview extends Component {
    
    render(){
        const {info,education,experience} = this.props

        return (
            <div>
                <h1>Details</h1>

                {
                    info.map((data) => {
                        if (data.text === "") {
                            return null
                        }else {
                          return <div className="details" key={data.id}><p>{data.title}:</p><p> {data.text}</p></div>}
                        
                    })
                }


                <h2>Education</h2>

                {
                    education.map((data) => {
                        if(data.text === "") {
                            return null
                        } else {
                            return <div className="education" key={data.id}><p>{data.title}:</p><p> {data.text}</p></div>
                        } 
                    })
                }

                <h2>Work Experience</h2>

                {
                    experience.map((data) => {
                        if(data.text === "") {
                            return null
                        } else {
                            return <div className="experience" key={data.id}><p>{data.title}:</p><p> {data.text}</p></div>
                        }                                     
                        
                    })
                }                              

            </div>
        )
    }

}

export default Overview