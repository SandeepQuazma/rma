import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import forgotPass from "../../assets/img/forgot-pass.png";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const ForgotPassword = () =>{
  return (
       <div className="auth-wrapper">
         <Container>
         <div className="login-form">
          <Row className="row min-vh-100 align-items-center">
                <Col xs={6} className="image-holder">
                    <img src={forgotPass}   className="App-logo" alt="login image"/>
                </Col>
                <Col xs={6} className="login-form-wrapper form">
                  <div className="logo-wrapper">    
                    <img src={logo} width="100"  className="App-logo" alt="login image"/>
                  </div>
                  <br/>
                  <h1>Forgot <span class="text-blue">Password</span></h1>
                  <Form  autocomplete="off" className="has-label-on-border">
                    <Form.Group className="col-12 mb-3 form-group" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email Address&nbsp;<span class="asterisk">*</span></Form.Label>
                      <Form.Control type="email" placeholder="" name="uname" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12" >
                      <Row>
                          <Col xs={6}>
                            <Button variant="primary" type="submit" className="btn btn-primary mt-3">
                              Submit&nbsp;<ArrowForwardIcon/>
                            </Button>
                          </Col>
                          <Col xs={6} className="d-flex flex-row-reverse"><br/>
                          <Link to="/login" className="forgot-pass-link btn-link">Back to Login</Link>
                        </Col>
                      </Row>
                    </Form.Group>
                      
                  </Form>        
                </Col>
            </Row>
       </div>
         </Container>
        
    </div>
  )
}

export default ForgotPassword
