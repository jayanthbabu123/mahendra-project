import React, { Component } from 'react';
import Home, { Hello } from './home';
import {Header} from './components/header'


class Dashboard extends Component {
    render() {
        return (
            <div>
                dashboard
                <Header />
                <Hello name={'jayanth'} />
                <Hello name={'mahendra'} />
                <Hello name={'hyderabad'} />
            </div>
        )
    }
}

export default Dashboard;