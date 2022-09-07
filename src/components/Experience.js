import React , {Component} from 'react';


class Experience extends Component {
    
    render(){

        const {onChange , onSubmitName, company,position,roles,workStart,workEnd} = this.props

        return (
            <div>
                <h2 className='component-heading'>Experience</h2>
                <form onSubmit={onSubmitName} id="experience">

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
                        
                        <textarea onChange={onChange} value={roles} type="text" id="roles" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="workStart">Start date: </label>
                        <input onChange={onChange} value={workStart} type="date" id="workStart"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="workEnd">End date: </label>
                        <input onChange={onChange} value={workEnd} type="date" id="workEnd"/>
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