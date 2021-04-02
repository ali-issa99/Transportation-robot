import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { findAllInRenderedTree } from 'react-dom/test-utils';
//import {ReactComponent as Logo} from '../../assets/robot.png'
//import 'src/components/login.css';
import {Redirect} from 'react-router-dom';
import robotaction from './demo/src/ReactNippleExample';
class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        };
     
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
    }
    
    
    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <img src='/assets/images/robot.png' alt='robot'/>
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
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                </div>
            </div>
        )
    }
}

export default Login;