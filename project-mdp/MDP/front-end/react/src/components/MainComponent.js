import React, { Component } from 'react';




import Header from './HeaderComponent';

import Footer from './FooterComponent';

import Home from './HomeComponent';

import Contact from './ContactComponent';

import AboutComponent from './AboutComponent';

import Login from './Login';

import SignUp from './SignUp';

import App from './demo/src/App';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { actions } from 'react-redux-form';

import { connect } from 'react-redux';

import {loginUser, logoutUser } from '../redux/ActionCreators';




const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}



const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
});


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

        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
        /> 



        
         



        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>


            <Route exact path="/login" render={(props) => <Login auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}  {...props} /> } />


          
        <Route exact path="/nipple" render={(props) => <App auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}  {...props} /> } />


             
           
              <Route path='/home' component={Home} />
    

              <Route exact path='/contactus' component={Contact} />

             

              <Route path= '/signup' component={SignUp}/>

              <Route path='/manual' component={App} /> 

              <Route path='/aboutus' component={AboutComponent} /> 

              <Redirect to='/login'/> 

          </Switch>
          </CSSTransition>
        </TransitionGroup>

        {/* <Footer/> */}

      </div>

    );

   }

  }

  

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));