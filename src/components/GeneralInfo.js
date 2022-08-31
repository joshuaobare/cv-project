import React , {Component} from 'react';
//import App from '../App';

class General extends Component {
    
    render(){

        const {value , onChange , onSubmitName} = this.props
        
        return (
            <div>
                <form onSubmit={onSubmitName} >
                    <label htmlFor="name">Name: </label>
                    <input onChange={onChange} value={value} type="text" id="name"/>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email"/>
                    <label htmlFor="number">Phone number: </label>
                    <input type="text" id="number"/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default General