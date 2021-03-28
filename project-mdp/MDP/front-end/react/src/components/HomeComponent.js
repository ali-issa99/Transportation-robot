import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {userEffect,useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';




class  Home  extends Component {

    intervalID;
    constructor(props) {
        
        super(props);
         this.state = { moves: [
            {direction:String,distance :String,speed :Number}
          ],isclicked:false,alerts:String,isalert:false
        };
        this.Showstatistics=this.Showstatistics.bind(this);
     
    }

componentDidMount(){
        this.getData();

        this.intervalID = setInterval(this.getData.bind(this), 5000);
     }

     componentWillUnmount() {
        clearInterval(this.intervalID);



     }

     getData = () => {
            // do something to fetch data from a remote API.
          
        fetch("http://localhost:9000/robot",{
                method:'GET',
                headers:{
              'Content-Type':'application/json'
            }
        })
        .then( function(response){
           
            return response.json();
        })
           
        .then (move => {
            console.log("hell0");
            console.log(move);
            
            this.setState({moves:move});
       
         });


        fetch("http://localhost:9000/robot/alerts",{
                method:'GET',
                headers:{
              'Content-Type':'application/json'
            }
        })
        .then( function(response){
          
            return response.json();
        })
           
        .then (alert => {
            
            if(alert!=null) {this.setState({alerts:JSON.stringify(alert),isalert:true});}
            else { this.setState({alerts:null,isalert:false});}
            
            
       
         });
        }



        
    
        
    


    Showstatistics() {


        this.setState({

            isclicked: !this.state.isclicked
        })

     
    
        
        
    }

  
   
     
   
 
    
    

    render() {

        if(this.state.isalert)  {
           
               this.setState({
                isalert: false
            
               });
          
               alert(this.state.alerts)
         }
        
       
      
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
                      <th>Force</th>
                      <th>Angle</th>
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