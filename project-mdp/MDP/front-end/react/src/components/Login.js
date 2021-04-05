import React, { Component } from 'react';
import {
   
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { findAllInRenderedTree } from 'react-dom/test-utils';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            b:''
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
     sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
     }
      
    handleLogin(event) {
        this.toggleModal();
 
        this.props.loginUser({ username: this.username.value, password: this.password.value }); 
       
        setTimeout(() => {  if(localStorage.getItem('token')!=null) {this.props.history.push(`/home`)} 
        else { alert("incorrect username or password  ") }  }, 300);
       
      
       event.preventDefault();
    

       
       

    }

    handleLogout() {
        this.props.logoutUser();
    }


render() {
    return (
        <React.Fragment>

            <div className='div-login'>

                <div className='div-login-logo'>

                    <img src='/assets/images/robot.png' alt='robot' />

                </div>

                <div>

                    <Form onSubmit={this.handleLogin}>

                        <FormGroup>

                            <Label htmlFor="username">Username</Label>

                            <Input type="text" id="username" name="username"

                                innerRef={(input) => this.username = input} />

                        </FormGroup>

                        <FormGroup>

                            <Label htmlFor="password">Password</Label>

                            <Input type="password" id="password" name="password"

                                innerRef={(input) => this.password = input} />

                        </FormGroup>

                        <FormGroup check>
                        </FormGroup>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">

                            Sign in

                        </button>

                        <p className="mt-3 mb-3 text-muted text-center">

                            No account ? <Link to="/signup">Create one here</Link>

                        </p>

                    </Form>

                </div>

            </div>
        </React.Fragment>
    );
}
}

export default Login;