import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function EditRoles() {
  return (
    <section className="edit-role-access">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Roles Access</h1>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <p className="align-content-right justify-flex-end">
                <Link to="/roles">
                  <Button className="btn btn-primary-outline btn-sm"><Link to="/roles">< ArrowBackIcon/>&nbsp;&nbsp;Back</Link></Button>
                </Link>
              </p>
              </Col>
          </Row>
          <div className="roles-edit-form">
            <Form className="row">
                <Form.Group className="col-6 mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Role Name</Form.Label>
                  <Form.Select aria-label="Default select example" title="Qoute Admin">
                    <option value="Qoute Admin">Qoute Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="OPS Manager">OPS Manager</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="col-6 mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Role Type</Form.Label>
                  <Form.Control type="text" placeholder="name@example.com" />
                </Form.Group>
                <div className="col-12 form-sub-title">
                  <h4 className="m-0">Permissions</h4>
                </div>
                <div className="col-3">
                  <div className="row">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Roles</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Add" />
                    <Form.Check type="checkbox" id="checkbox" label="Edit" />
                    <Form.Check type="checkbox" id="checkbox" label="View" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Actions</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Add" />
                    <Form.Check type="checkbox" id="checkbox" label="Edit" />
                    <Form.Check type="checkbox" id="checkbox" label="View" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="row mb-4">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Users</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Add" />
                    <Form.Check type="checkbox" id="checkbox" label="Edit" />
                    <Form.Check type="checkbox" id="checkbox" label="View" />
                    <Form.Check type="checkbox" id="checkbox" label="Delete" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Mortality Category</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Add" />
                    <Form.Check type="checkbox" id="checkbox" label="Edit" />
                    <Form.Check type="checkbox" id="checkbox" label="View" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Range Tables</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Add" />
                    <Form.Check type="checkbox" id="checkbox" label="Edit" />
                    <Form.Check type="checkbox" id="checkbox" label="View" />
                    <Form.Check type="checkbox" id="checkbox" label="Delete" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Scheme Settings</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Update Scheme" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                  <Form.Label className="col-12 checkbox-title-role mb-0">Quotes</Form.Label>
                    <Form.Check type="checkbox" id="checkbox" label="Add" />
                    <Form.Check type="checkbox" id="checkbox" label="Edit" />
                  </div>
                </div>
                <div className="col-3">&nsbp;</div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">&nbsp;</div>
                    <div className="col-3 d-flex flex-row-reverse">
                      <button type="reset" className="btn btn-primary-outline mr-1">Reset</button>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary">Submit</button></div>
                    <div className="col-3">&nbsp;</div>
    
                
                  </div>
                </div>
                
              </Form>
          </div>    
        </Container>
    </section>
  )
}
 