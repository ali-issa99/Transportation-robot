import React, { Component, useRef, useEffect } from 'react';
import {
   
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import {TweenMax} from 'gsap';

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
 
        this.props.loginUser({ username: this.username.value, password: this.password.value })
       .then(
             token =>   {  if(localStorage.getItem('token')!=null) {this.props.history.push(`/home`)} 
             else { alert("incorrect username or password  ") }  }


       )
     event.preventDefault();
      
    }

    handleLogout() {
        this.props.logoutUser();
    }

    Logpage(){};
    
    
    


render() {
    return (
        <React.Fragment>
                <div className="wrapper">
                    <div className="separate" id="start">
                        <div className="banner">
                            <img src='/assets/images/signin.png' alt='robot' />
                        </div>
                    </div>
                    <div className="separate" id="form-section">
                        <div className="form-style">
                            <div className="logo">
                                <img src='/assets/images/robot.png' alt='logo' />
                            </div>
                            <h2>Welcome to My Robot</h2>
                            <Form onSubmit={this.handleLogin}>

                                <FormGroup className='fields'>
    
                                    <Label htmlFor="username">Username</Label>
    
                                    <Input type="text" id="username" name="username"
    
                                        innerRef={(input) => this.username = input} />
    
                                </FormGroup>
    
                                <FormGroup className='fields'>
    
                                    <Label htmlFor="password">Password</Label>
    
                                    <Input type="password" id="password" name="password"
    
                                        innerRef={(input) => this.password = input} />
    
                                </FormGroup>
    
                                <FormGroup check>
                                </FormGroup>
                                <button className="submit-btn" type="submit">
    
                                    Sign in
    
                                </button>
    
                                <p className="mt-3 mb-3 text-muted text-center">
    
                                    No account ? <Link to="/signup">Create one here</Link>
    
                                </p>
    
                            </Form>
                        </div>
                    </div>
                </div>

            
        </React.Fragment>
    );
}
}



export default Login;