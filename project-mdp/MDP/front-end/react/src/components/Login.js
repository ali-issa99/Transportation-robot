import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
//import {ReactComponent as Logo} from '../../assets/robot.png'
//import 'src/components/login.css';
import {Redirect} from 'react-router-dom';
import robotaction from './demo/src/ReactNippleExample';
class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state={

            username:String,
            password:String,
            token:''
    
        }
    
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleusername = this.handleusername.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
      }




    handleusername(event){
  

        this.setState({username: event.target.value});

    }
    handlepassword(event){
  

        this.setState({password: event.target.value});
    
    }

  
   handleSubmit(event){
       
    
       const payload={
            username:this.state.username,
            password:this.state.password
 

       } 
     
        fetch("http://localhost:3000/users/login", {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
             body:   JSON.stringify(payload)
        })
       .then(res => (res.json()))
      
       .then((data) =>  { this.setState({token:data.token})
    },
    (error) => {
       alert(error);
       
       
    })

  // alert(this.state.token)

  
}

    
        
    

     
  



   

    
    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <img src='/assets/images/robot.png' alt='robot'/>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input  onChange={this.handleusername} name='email' placeholder='email...' />
                        <input type="password" onChange={this.handlepassword} name='pwd' placeholder='password...'/>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;