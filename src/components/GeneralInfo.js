import React , {Component} from 'react';
//import App from '../App';

class General extends Component {
    
    render(){

        const {nameValue , onChange , onSubmitName, numberValue ,emailValue} = this.props
        
        return (
            <div>
                <h2 className='component-heading'>General Info</h2>
                <form onSubmit={onSubmitName} >

                    <div className="form-item">
                        <label htmlFor="name">Name: </label>
                        <input onChange={onChange} value={nameValue} type="text" id="name"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email: </label>
                        <input onChange={onChange} value={emailValue} type="email" id="email"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="number">Phone number: </label>
                        <input onChange={onChange} value={numberValue} type="text" id="number"/>    
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

export default General