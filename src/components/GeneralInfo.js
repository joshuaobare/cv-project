import React , {Component} from 'react';
//import App from '../App';

class General extends Component {
    
    render(){

        const {nameValue , onChange , onSubmitName, numberValue ,emailValue} = this.props
        
        return (
            <div>
                <form onSubmit={onSubmitName} >
                    <label htmlFor="name">Name: </label>
                    <input onChange={onChange} value={nameValue} type="text" id="name"/>
                    <label htmlFor="email">Email: </label>
                    <input onChange={onChange} value={emailValue} type="email" id="email"/>
                    <label htmlFor="number">Phone number: </label>
                    <input onChange={onChange} value={numberValue} type="text" id="number"/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default General