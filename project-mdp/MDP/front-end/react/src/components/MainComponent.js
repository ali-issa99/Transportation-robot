import React, { Component } from 'react';




import Header from './HeaderComponent';

import Footer from './FooterComponent';

import Home from './HomeComponent';

import Contact from './ContactComponent';

import AboutComponent from './AboutComponent';

import Login from './Login';

import SignUp from './SignUp';

import App from './demo/src/App';

import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {



  constructor(props) {

    super(props);

    this.state = {

     

    };

  }




  render() {

    //men7ot exact 3ashain marat 3ena url fi /menu/...




   



    return (

      <div>

        <Header/>

        <Switch>

          

              <Route path='/home' component={Home} />

       

          

             <Route exact path='/contactus' component={Contact} />

             <Route path= '/login' component={Login}/>

             <Route path= '/signup' component={SignUp}/>

             <Route path='/manual' component={App} /> 

             <Route path='/aboutus' component={AboutComponent} /> 

            <Redirect to="/home" /> 

          </Switch>

        {/* <Footer/> */}

      </div>

    );

   }

  }

  

export default Main;