import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button, Row, Col} from 'reactstrap';

const required = (val) => val && val.length; //value grater than 0
const maxLength = (len) => (val) => !(val) || (val.length <= len); //ensures that the len of the value is less than or eqaul to the specified parameter 
const minLength = (len) => (val) => val && (val.length >= len); // len is greater than or equal to len
const isNumber = (val) => !isNaN(Number(val)); //check num
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); //check that the entered val is email

class Sign extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }

    render() {
        return(
           <div className="container">
               <div className="center">
                   <br/>
                   <br/>
               <p style={{color:"#e6ac00"}}><b>Sign Up</b></p>
               <h2>Create Your Acount</h2>


               <div className="row row-content" style={{alignContent:"center"}}>
                   <div className="col-12 col-md-12 m-0">
                       
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                           
                            <Row className="form-group">
                             
                            
                            <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Enter Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(20)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                
                                <Col md={10}>
                                <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 10 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                              
                            <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={10}>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="password"
                                        className="form-control"
                                       
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                       
                                     />
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Sign up
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            
                            </Row>
                        </LocalForm>
                   </div>
                   </div>

             
            <br/>









            
            <div className="col">
                <p>Or sign in using</p>
            </div>
            <br/>
              <div className="col-12 col-md-6 m-0">
                <a href="#" class="fb btn">
                <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
                <br/>
                <br/>
                <a href="#" className="twitter btn">
                <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                </a>
                <br/>
                <br/>
                <a href="#" className="google btn">
                <i class="fa fa-google fa-fw"></i> Login with Google+
                </a>
            </div>

               </div>

           </div>
        );
    }
}

export default Sign;