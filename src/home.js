import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )

    }
}

export default Home;


export class Hello extends Component{
    render(){
        return(
            <div>Hello {this.props.name}</div>
        )
    }
 }
