import React , {Component} from 'react';


class Experience extends Component {
    
    render(){

        const {onChange , onSubmitName, company,position,roles,workStart,workEnd} = this.props

        return (
            <div>
                <h2 className='component-heading'>Experience</h2>
                <form onSubmit={onSubmitName}>

                    <div className="form-item">
                        <label htmlFor="company">Company Name: </label>
                        <input onChange={onChange} value={company} type="text" id="company"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="position">Position: </label>
                        <input onChange={onChange} value={position} type="text" id="position"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="roles">Roles: </label>
                        <input onChange={onChange} value={roles} type="text" id="roles"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="work-start-date">Start date: </label>
                        <input onChange={onChange} value={workStart} type="date" id="work-start-date"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="work-end-date">End date: </label>
                        <input onChange={onChange} value={workEnd} type="date" id="work-end-date"/>
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

export default Experience