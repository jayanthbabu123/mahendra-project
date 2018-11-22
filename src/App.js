import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
