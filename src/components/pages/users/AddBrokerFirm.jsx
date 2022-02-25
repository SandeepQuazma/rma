import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import style from  '../../assets/sass/pages/actions.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function AddBrokerFirm() {
  return (
    <section className="edit-role-access add-role-access">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Add Broker Firm</h1>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <p className="align-content-right justify-flex-end">
                <Link to="/broker-firm">
                  <Button className="btn btn-primary-outline btn-sm">< ArrowBackIcon/>&nbsp;&nbsp;Back</Button>
                </Link>
              </p>
              </Col>
          </Row>
          <div className="brokerFirm-add-form">
              <div className="card product-wrap" >
                  <div className="card-body">
                    <Form className="row has-label-on-border">
                      <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Broker Firm Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>VAT Number</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Status </Form.Label>
                        <Form.Select aria-label="Default select example" title="--">
                          <option value="Qoute Admin">Active</option>
                          <option value="Manager">Inactive</option>
                          <option value="OPS Manager">Deactive</option>
                        </Form.Select>
                      </Form.Group>
                      <div className="col-6"></div>
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
