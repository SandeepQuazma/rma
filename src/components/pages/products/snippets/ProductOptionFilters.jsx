import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Form, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';


  export default class ProductOptionFilters extends Component {
      render(){
        return (
            <div className="conatiner-fluid filter-section">
                 <Row className="p-4">
                      <Col>
                          <h1 className="page-title m-0">Products</h1>
                      </Col>
                      <Col className="d-flex flex-row-reverse">
                          <Link to="/add-product-options">
                                <button type="button" className="btn btn-primary btn-sm mr-1">
                                <AddIcon/>&nbsp;&nbsp;Add Products
                            </button>
                          </Link>
                     
                      </Col>
                  </Row>
            </div>
         
        )
      }
 
}
