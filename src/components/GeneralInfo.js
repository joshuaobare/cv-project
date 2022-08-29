import React , {Component} from 'react';


class General extends Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"/>
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