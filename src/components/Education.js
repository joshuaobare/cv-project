import React , {Component} from 'react';


class Education extends Component {
    

    render(){

        const {schoolName , onChange , onSubmitName, degreeName ,schoolStart,schoolEnd} = this.props

        return (
            <div>
                <h2 className='component-heading'>Education</h2>
                <form onSubmit={onSubmitName} id="education">

                    <div className="form-item">
                        <label htmlFor="school">School Name: </label>
                        <input onChange={onChange} value={schoolName} type="text" id="school"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="degree">Degree: </label>
                        <input onChange={onChange} value={degreeName} type="text" id="degree"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="schoolStart">Admission Date: </label>
                        <input onChange={onChange} value={schoolStart} type="date" id="schoolStart"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="schoolEnd">Graduation Date: </label>
                        <input onChange={onChange} value={schoolEnd} type="date" id="schoolEnd"/>
                    </div>
                    <div className="form-item">
                        <button type="submit">
                            Submit
                        </button>
                    </div> 
                          
                    
                </form>
            </div>
        )
    }

}

export default Education