import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import style from  '../../assets/sass/pages/actions.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function EditRangeTables() {
  return (
    <section className="edit-role-access add-role-access">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Edit Action</h1>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <p className="align-content-right justify-flex-end">
                <Link to="/roles">
                  <Button className="btn btn-primary-outline btn-sm"><Link to="/actions">< ArrowBackIcon/>&nbsp;&nbsp;Back</Link></Button>
                </Link>
              </p>
              </Col>
          </Row>
          <div className="roles-edit-form">
              <div className="card product-wrap" >
                  <div className="card-body">
                    <Form className="row has-label-on-border">
                      <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlInput1">
                        <Form.Label>Range Name </Form.Label>
                        <Form.Control type="text" placeholder="" />
                        
                      </Form.Group>
                      <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Action Name</Form.Label>
                        <Form.Select aria-label="Default select example" title="--">
                          <option value="Qoute Admin">Funeral</option>
                          </Form.Select>
                      </Form.Group>
                      <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Select Category</Form.Label>
                        <Form.Select aria-label="Default select example" title="--">
                          <option value="Qoute Admin">SA85-90</option>
                          <option value="Qoute Admin">SA85-90(heavy)</option>
                          <option value="Qoute Admin">AIDS</option>
                          </Form.Select>
                      </Form.Group>
                      <h4>Age Bands</h4>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>Label</th>
                            <th>Min. Age</th>
                            <th>Max. Age</th>
                            <th>Main Member</th>
                            <th>Spouse</th>
                            <th>Child</th>
                            <th>Parents</th>
                            <th>Extended Members</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Under 64</td>
                            <td>15</td>
                            <td>64</td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                          </tr>
                          <tr>
                            <td>Above 65</td>
                            <td>65</td>
                            <td>84</td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                          </tr>
                          <tr>
                            <td>Above 85</td>
                            <td>85</td>
                            <td>130</td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                            <td><Form.Control type="text" placeholder="" /></td>
                          </tr>
                          </tbody>
                        </Table>


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
