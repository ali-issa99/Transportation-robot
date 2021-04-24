import React, { Component } from 'react';




import Header from './HeaderComponent';

import Footer from './FooterComponent';

import Home from './HomeComponent';

import Contact from './ContactComponent';

import About from './AboutComponent';

import Login from './Login';

import SignUp from './SignUp';

import App from './demo/src/App';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';



import { connect } from 'react-redux';


import { loginUser, logoutUser } from '../redux/ActionCreators';




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


  render() {


    let header = localStorage.getItem('token') ? <Header auth={this.props.auth}
      loginUser={this.props.loginUser}
      logoutUser={this.props.logoutUser}
    />
      : null
    
    return (

      <div>

        <div>
          {header}
        </div>

        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>


              <Route exact path="/login" render={(props) => <Login auth={this.props.auth}
                loginUser={this.props.loginUser}
                logoutUser={this.props.logoutUser}  {...props} />} />


              <Route exact path="/nipple" render={(props) => <App auth={this.props.auth}
                loginUser={this.props.loginUser}
                logoutUser={this.props.logoutUser}  {...props} />} />


              <Route path='/home' component={Home} />


              <Route exact path='/contactus' component={Contact} />

             <Route path='/signup' component={SignUp} />

              <Route path='/manual' component={App} />

              <Route exact path='/aboutus' component={About} />

              <Redirect to='/login' />

            </Switch>
          </CSSTransition>
        </TransitionGroup>

        {/* <Footer/> */}

      </div>

    );

  }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));