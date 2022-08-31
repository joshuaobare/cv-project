import React , {Component} from 'react';


class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        
        return (
            <div>
                <h1>Details</h1>
                <p>Name: {this.props.names}</p>
                <p>Email: {this.props.email}</p>
                <p>Phone Number: {this.props.number}</p>
                
            </div>
        )
    }

}

export default Overview