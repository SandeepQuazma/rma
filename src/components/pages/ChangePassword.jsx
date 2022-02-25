import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function ChangePassword() {
  return (
    <section className="change-password">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Change Password</h1>
            </Col>
          </Row>
          <div className="change-password-form">
              <div className="card product-wrap" >
                  <div className="card-body">
                  <Form className="row has-label-on-border">
                    <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>New Passowrd</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <div className="col-3">&nbsp;</div>
                    <div className="col-3 d-flex flex-row-reverse">
                        <button type="reset" className="btn btn-primary-outline mr-1">Reset</button>
                    </div>
                      <div className="col-3">
                          <button type="submit" className="btn btn-primary">Submit</button></div>
                      <div className="col-3">&nbsp;</div>
          
                  </Form>
                </div>
              </div>
            </div>
        </Container>
        
        
    </section>
  )
}
