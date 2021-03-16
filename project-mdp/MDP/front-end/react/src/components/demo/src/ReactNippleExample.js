import React, { Component } from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import ReactNipple from "react-nipple";
import DebugView from "react-nipple/lib/DebugView";
import "react-nipple/lib/styles.css";

export default class ReactNippleExample extends Component {
    static propTypes = {
        title: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        options: PropTypes.object
    };
    state = {
        data: undefined,
        direction: Number,
        distance :Number,
        speed:Number
    };
   
  
    render() {

        
       
        return (

            
            <div className="container">
            <div className="row">
                <Breadcrumb>
                   <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                   <BreadcrumbItem active>Manual</BreadcrumbItem>
               </Breadcrumb>
                <div className="col-12">
                   <h3>Manual Mode</h3>
                   <hr />
               </div>                
             </div>  

            <div className="NippleExample row row-content">
            <div className="col-12 col-sm-4 offset-sm-1">
                <ReactNipple
                    className="joystick"
                    options={this.props.options}
                    style={{
                        outline: `1px dashed ${this.props.options.color}`,
                        width: this.props.width,
                        height: this.props.height
                    }}
                    onStart={this.handleJoystickStart}
                    onEnd={this.handleJoystickEnd}
                    onMove={this.handleJoystickMove}
                    onDir={this.handleJoystickDir}
                    onPlain={this.handleJoystickPlain}
                    onShown={this.handleJoystickShown}
                    onHidden={this.handleJoystickHidden}
                    onPressure={this.handleJoystickPressure}
                    onMove={(evt, data) =>


                        //this.setState({direction: data.direction.x},{distance:data.angle.degree},{speed:data.force}),
                       //console.log(JSON.stringify(data.direction).split(',')[0].split(':')[1] + JSON.stringify(data.direction).split(',')[1].split(':')[1] )
                        //console.log(  typeof data.force  )
                        
                       // console.log(data.angle.degree)

                        //console.log(data.direction.x ? data.direction.x : 0)
                       
                       
 
                      
                    
                        


                        fetch("http://localhost:9000/robot", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                             body: JSON.stringify({direction:JSON.stringify(data.direction).split(',')[0].split(':')[1] + JSON.stringify(data.direction).split(',')[1].split(':')[1],distance:data.force,speed:data.angle.degree})
                            // body: JSON.stringify({direction:this.state.direction,distance:this.state.distance,speed:this.state.speed})
                            })
                        
                    
                    }
                    
                    
                    
                />
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                <DebugView data={this.state.data}/>
                </div>
                
            


            </div>
            </div>
        );
    }

    handleJoystickStart = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickEnd = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickMove = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickDir = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickPlain = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickShown = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickHidden = (evt, data) => {
        this.setState({ data });
    };
    handleJoystickPressure = (evt, data) => {
        this.setState({ data });
    };
}
