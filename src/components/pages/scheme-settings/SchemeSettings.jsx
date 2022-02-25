import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import PercentIcon from '@mui/icons-material/Percent';

export default function SchemeSettings() {
  return (
    <section className="edit-role-access add-role-access">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Scheme Settings</h1>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <p className="align-content-right justify-flex-end">
                <Link to="/roles">
                  <Button className="btn btn-primary-outline btn-sm"><Link to="/roles">< ArrowBackIcon/>&nbsp;&nbsp;Back</Link></Button>
                </Link>
              </p>
              </Col>
          </Row>
          <div className="scheme-settings-form">
            <div className="card product-wrap">
                <div className="card-body">
                  <Form className="row has-label-on-border">
                    <Col xs={6}>
                      <Row>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlInput1">
                          <Form.Label>Products</Form.Label>
                          <Form.Select aria-label="Default select example" title="--">
                            <option value="Qoute Admin">Funeral</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlInput1">
                          </Form.Group>
                        <div className="col-12">
                          <hr/>
                        </div>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>SA85-90 Table</Form.Label>
                          <Form.Select aria-label="Default select example" title="--">
                            <option value="Qoute Admin">SA85-90-2021</option>
                            <option value="Qoute Admin">SA85-90-2020</option>
                            <option value="Qoute Admin">SA85-90-2019</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>SA85-90 Loading</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>AIDS Table</Form.Label>
                          <Form.Select aria-label="Default select example" title="--">
                            <option value="Qoute Admin">SA85-90-2021</option>
                            <option value="Qoute Admin">SA85-90-2020</option>
                            <option value="Qoute Admin">SA85-90-2019</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>AIDS Loading</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                        <div className="col-12">
                          <hr/>
                        </div>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>COVID Loading</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Expenses</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Profit Margin</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Contingency Margin</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                        <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Max Commission</Form.Label>
                          <div className="input-wrapper has-right-icon">
                            <Form.Control type="text" className="value-right changer"  placeholder="" />
                          </div>
                        </Form.Group>
                      </Row>
                    </Col>
                    <Col xs={6}>
                      <Row>
                        <Col>
                          <div className="card no-shadow p-0">
                            <div className="card-body p-0">
                              <div className="scheme-header d-flex justify-content-between m-0 align-items-center">
                                <div>
                                  <strong>For</strong>
                                </div>
                                <div class="text-bold d-flex align-items-center">
                                  <span class="mr-2">R&nbsp;</span>
                                  <input id="randValue" class="form-control changer value-right" value="1000"/>
                                </div>
                                <div class="text-bold d-flex align-items-center">
                                  <div class="mr-2">Age&nbsp;Band&nbsp;</div>
                                    <select class="form-control selectpicker changer"  title="--" id="ageBand">
                                      <option value="0.00778" selected>Under 64</option>
                                      <option value="0.00266">Above 65</option>
                                      <option value="0.00251">Above 85</option>
                                    </select>
                                  </div>
                              </div>
                              <div className="table-wrapper">
                                <Table bordered className="form-inside-table">
                                <thead>
                                    <tr>
                                      <th>Sr No.</th>
                                      <th>Description</th>
                                      <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                      <td className="text-right">1</td>
                                      <td>SA85-90 Table(SA85-90-2021)</td>
                                      <td className="text-right">0.00778</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">2</td>
                                      <td>Per R1000 Cover Option</td>
                                      <td className="text-right">7.78</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">3</td>
                                      <td>Loading Amount(at 10%)</td>
                                      <td className="text-right">8.56</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">4</td>
                                      <td>AIDS Table(AIDS-2021)</td>
                                      <td className="text-right">0.00069</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">5</td>
                                      <td>Per R1000 Cover Option</td>
                                      <td className="text-right">0.690</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">6</td>
                                      <td>Loading Amount(at 9%)</td>
                                      <td className="text-right">0.752</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">7</td>
                                      <td>3 + 6</td>
                                      <td className="text-right">9.31</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">8</td>
                                      <td>COVID Loading(at 8%)</td>
                                      <td className="text-right">10.1</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">9</td>
                                      <td>Expenses (at 7%)</td>
                                      <td className="text-right">10.1</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">10</td>
                                      <td>Profit Margin(at 15%)</td>
                                      <td className="text-right">1.51</td>
                                    </tr>
                                    <tr>
                                      <td className="text-right">11</td>
                                      <td>Contingency Margin(at 22.5%)</td>
                                      <td className="text-right">2.26</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <div className="d-flex justify-content-between final-premium">
                                    <div className="text-bold">
                                        Final Premium
                                    </div>
                                    <div className="text-bold text-right">                                                                
                                        <div className="value" id="fp">14.5</div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row>
                        <div className="col-3">&nbsp;</div>
                        <div className="col-3 d-flex flex-row-reverse">
                            <button type="reset" className="btn btn-primary-outline mr-1">Reset</button>
                        </div>
                        <div className="col-3">
                            <button type="submit" className="btn btn-primary">Submit</button></div>
                        <div className="col-3">&nbsp;</div>
                      </Row>
                    </Col>
                  </Form>
                </div>
            </div>
          </div>
        </Container>
        
        
    </section>
  )
}
