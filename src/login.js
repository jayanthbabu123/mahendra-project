import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email:'',
            showError:false
        }
    }

    handleLogin(event){
     this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit(){
        console.log(this.props.history)
        if(this.state.username === 'admin' && this.state.password ==='admin1'){
           this.props.history.push('/dashboard');
        } else{
          this.setState({showError: true})
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="form-heading">login Form</h1>
                    <div class="login-form">
                        <div class="main-div">
                            <div class="panel">
                                <h2>Admin Login</h2>
                                <p>Please enter your email and password</p>
                            </div>
                            <div className="form-group text-left">
                                    <label>
                                        username
                                   </label>
                                    <input class="form-control" type="text" name="username" value={this.state.username} onChange={(event) => this.handleLogin(event)} />
                                </div>
                                <div className="form-group text-left">
                                    <label className="text-left">
                                        password
                                   </label>
                                    <input class="form-control" type="text" name="password" value={this.state.password} onChange={(event) => this.handleLogin(event)} />
                                </div>
                                <div className="form-group text-left">
                                    <label className="text-left">
                                        password
                                   </label>
                                    <input class="form-control" type="email" name="email" value={this.state.email} onChange={(event) => this.handleLogin(event)} />
                                </div>
                                <button className="btn btn-primary" onClick={()=>this.handleSubmit()} >Login</button>
                        </div>
                    </div>

                    {this.state.showError ? <div className="alert alert-warning">
                       please enter correct username and password
                    </div> : ''}
                    
                </div>

            </div>


        )

    }
}

export default Login;