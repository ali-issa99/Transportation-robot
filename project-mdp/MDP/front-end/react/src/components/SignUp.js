import React from 'react';


import {Redirect} from 'react-router-dom';
class SignUp extends React.Component{

   

   

    constructor(props) {
        super(props);
        this.state={

            username:String,
            password:String
    
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
       fetch("http://localhost:9000/users/signup", {
           method: 'POST',
           headers: {
               'Accept':'application/json',
               'Content-Type': 'application/json',
           },
            body:   JSON.stringify(payload)
       })
      .then(res => res.json())

      return  <Redirect to="/home" /> 
    
    

 }

  



    render(){

        return(

            <div className='div-login'>

                <div className='div-login-logo'>

                    <img src='/assets/images/robot.png' alt='robot'/>

                </div>

                <div>

                    <form >

                        <input onChange={this.handleusername} name='email' placeholder='email...' />

                        <input onChange={this.handlepassword}  name='pwd' placeholder='password...' />

                        <button onClick={this.handleSubmit}>Sign UP</button>

                    </form>

                </div>

            </div>

        )

    }

}



export default SignUp;