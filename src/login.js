import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
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
                            <form >

                                <div class="form-group">


                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" />

                                </div>

                                <div class="form-group">

                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />

                                </div>
                                <div class="forgot">
                                    <a href="reset.html">Forgot password?</a>
                                </div>
                                <button  class="btn btn-primary"><Link to="/dashboard">Login</Link></button>

                            </form>
                        </div>
                        <p class="botto-text"> Designed by Sunil Rajput</p>
                    </div></div></div>


        )

    }
}

export default Login;