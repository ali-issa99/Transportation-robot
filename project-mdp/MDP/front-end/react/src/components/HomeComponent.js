import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {userEffect,useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

class  Home  extends Component {


    constructor(props) {
        super(props);
         this.state = { moves: [
            {direction:String,distance :String,speed :Number}
          ],isclicked:false
        };
        this.Showstatistics=this.Showstatistics.bind(this);
   
    }

     
    
   
      

    



    
    componentDidMount(){
            fetch("http://localhost:9000/robots",{
                method:'GET',
                headers:{
              'Content-Type':'application/json'
            }
        })
        .then( function(response){
            return response.json();
        })
           
        .then (move => {
            console.log(move);
            this.setState({moves:move});
       
         });
        
    }


    Showstatistics() {


        this.setState({

            isclicked: !this.state.isclicked
        })

     
    
        
        
    }
    
     
   
 
   
    

    render() {
        return(
            <div className="container contain1 ">
                <div className="row align-items-start">
                    
                               
                           <img    src='/assets/images/robotwelcome1.png' alt="robot" />
                           
                            
                             
                   
                    <div className="col-12 col-md m-1">
                                    <Card>
                                <CardImg  height="300px" src='assets/images/auto1.png' alt="robot"/>
                               
                                
                            </Card>
                    </div>
                    <div className="col-12 col-md m-1">
                                    <Card>
                                    <Link to={`/manual`} >
                                <CardImg  height="300px"  src='assets/images/manual.jpg' alt="robot"/>
                               
                                </Link>
                            </Card>
                    </div>


                   
                </div>

                <button onClick={this.Showstatistics}>Show statistics</button>
              
                
                  
             <Collapse isOpen={this.state.isclicked} >
                  <Table striped bordered hover variant="dark">
                      <thead>
                      <tr>
                      <th>Distance </th>
                      <th>Move</th>
                      <th>speed</th>
                      </tr>
                      </thead>
                      <tbody>
                      {this.state.moves.map(function(item, key){
                          return(
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