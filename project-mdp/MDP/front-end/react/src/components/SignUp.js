import React, { Component } from 'react';

import {  Form, FormGroup, Input, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            username: String,
            password: String

        }

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleusername = this.handleusername.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
    }

    handleusername(event) {
        this.setState({ username: event.target.value });

    }
    handlepassword(event) {


        this.setState({ password: event.target.value });

    }

    handleSubmit(event) {

        const payload = {
            username: this.state.username,
            password: this.state.password


        }
        fetch("http://localhost:9000/users/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
       .then(res => res.json())

        this.props.history.push(`/login`)





    }


    render() {

        return (

            <React.Fragment>
                <div className="wrapper">
                    <div className="separate" id="start">
                        <div className="banner">
                            <img src='/assets/images/signup.png' alt='robot' />
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

                                    <Input onChange={this.handleusername} name='email' placeholder='email...' />

                                </FormGroup>

                                <FormGroup className='fields'>

                                    <Label htmlFor="password">Password</Label>

                                    <Input onChange={this.handlepassword} name='pwd' placeholder='password...' />

                                </FormGroup>

                                <FormGroup check>
                                </FormGroup>
                                <button className="submit-btn" type="submit" onClick={this.handleSubmit}>

                                    Sign up

                                </button>

                                <p className="mt-3 mb-3 text-muted text-center">

                                    already have an account ?<Link to="/login">log in</Link>

                                </p>

                            </Form>
                        </div>
                    </div>
                </div>        
            </React.Fragment>

        )

    }

}



export default SignUp;