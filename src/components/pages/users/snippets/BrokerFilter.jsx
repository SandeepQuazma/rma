import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Form, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';

  export default class BrokerFilter extends Component {
    
    
      render(){
        return (
            <div className="conatiner-fluid filter-section">
                 <Row className="p-4">
                      <Col>
                          <h1 className="page-title m-0">Broker Firm</h1>
                      </Col>
                      <Col className="d-flex flex-row-reverse">
                        <button type="button" className="btn btn-primary-outline btn-sm active" onclick="toggleFilter(event,'filter_roles')">
                            <FilterAltIcon/>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        
                          <Link to="/add-broker-firm">
                                <button type="button" className="btn btn-primary btn-sm mr-1">
                                <AddIcon/>&nbsp;&nbsp;Add Broker Firm
                            </button>
                          </Link>
                      
                     

                      </Col>
                  </Row>
                  <Row className="p-4">
                      <Col className="card">
                          <Form>
                            <Row>
                              <Col xs={4} md={3}>
                                    <Form.Select aria-label="Default select example" title="Select Status">
                                      <option value="Active">Active</option>
                                      <option value="Inactive">Inactive</option>
                                      <option value="Deactive">Deactive</option>
                                  </Form.Select>
                              </Col>
                              <Col xs={8} md={9} >
                                        <div className="btn-action">
                                    <button type="submit" className="btn-primary btn">GO</button>
                                </div>
                              </Col>
                            </Row>
                     
                          </Form>
                      </Col>
                     
                  </Row>
            </div>
         
        )
      }
 
}
