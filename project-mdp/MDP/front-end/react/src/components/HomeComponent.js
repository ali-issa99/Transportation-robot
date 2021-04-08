import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { userEffect, useState } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import ReactRoundedImage from "react-rounded-image";


class Home extends Component {

    intervalID;
    constructor(props) {

        super(props);
        this.state = {
            moves: [
                { direction: String, distance: String, speed: Number }
            ], isclicked: false, alerts: String, isalert: false
        };
        this.Showstatistics = this.Showstatistics.bind(this);

    }

    componentDidMount() {
        this.getData();

        this.intervalID = setInterval(this.getData.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);



    }

    getData = () => {
        // do something to fetch data from a remote API.

        fetch("http://localhost:9000/robot", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {

                return response.json();
            })

            .then(move => {

                console.log(move);

                this.setState({ moves: move });

            });


        fetch("http://localhost:9000/robot/alerts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {

                return response.json();
            })

            .then(alert => {

                if (alert != null) { this.setState({ alerts: JSON.stringify(alert), isalert: true }); }
                else { this.setState({ alerts: null, isalert: false }); }



            });
    }


    Showstatistics() {


        this.setState({

            isclicked: !this.state.isclicked
        })



    }



    render() {

        // if(this.state.isalert)  {

        //        this.setState({
        //         isalert: false

        //        });

        //        alert(this.state.alerts)
        //  }



        return (



            <div className="container contain1 ">


                <div className="row align-items-start">
                <div className="col-12 offset-1 col-md-2 ">

                    <img src='/assets/images/robotwelcome1.png' alt="robot" />

                </div>


                    <div className="col-3 offset-1 col-md-3 ">
                        <ReactRoundedImage
                            image='assets/images/auto1.png'
                            roundedColor="#321124"
                            imageWidth="150"
                            imageHeight="150"
                            roundedSize="13"
                        />

                    </div>
                    <div className="col-3 col-md-3 ">

                        <Link to={`/manual`} >
                        <ReactRoundedImage
                            
                            image='assets/images/manual.jpg'
                            roundedColor="#321124"
                            imageWidth="150"
                            imageHeight="150"
                            roundedSize="13"
                        />
                                              
                     </Link>
                    
                              
                           
                    </div>

                 <div     onClick={this.Showstatistics}>
                        <ReactRoundedImage
                           
                          
                            image='assets/images/stats.png'
                            roundedColor="#321124"
                            imageWidth="150"
                            imageHeight="150"
                            roundedSize="13"
                        />
                        </div>
         
                           
                   

                    </div>

                    <Collapse isOpen={this.state.isclicked} >
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Distance </th>
                                    <th>Force</th>
                                    <th>Angle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.moves.map(function (item, key) {
                                    return (
                                        <tr key={key}>
                                            <td>{item.direction}</td>
                                            <td>{item.distance}</td>
                                            <td>{item.speed}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Collapse>

                </div>
        )


    }
 }





export default Home;