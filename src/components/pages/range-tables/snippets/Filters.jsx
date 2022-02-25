import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Form, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { components } from "react-select";

import { default as ReactSelect } from "react-select";
import { Link } from 'react-router-dom';

const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  
  const options = [
  { value: 'SA85-90-2021', label: 'SA85-90-2021' },
  { value: 'SA85-90-2020', label: 'SA85-90-2020' },
  { value: 'SA85-90-2019', label: 'SA85-90-2019' },
];

  export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          optionSelected: null
        };
      }
    
      handleChange = (selected) => {
        this.setState({
          optionSelected: selected
        });
      };
    
      render(){
        const { selectedOption } = this.state;
        return (
            <div className="conatiner-fluid filter-section">
                 <Row className="p-4">
                      <Col>
                          <h1 className="page-title m-0">Range Tables</h1>
                      </Col>
                      <Col className="d-flex flex-row-reverse">
                          <Link to="/add-role">
                                <button type="button" className="btn btn-primary btn-sm mr-1">
                                <AddIcon/>&nbsp;&nbsp;Add Range Tables
                            </button>
                          </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="button" className="btn btn-primary-outline btn-sm active" onclick="toggleFilter(event,'filter_roles')">
                          <FilterAltIcon/>
                      </button>
                      </Col>
                  </Row>
                  <Row className="p-4">
                      <Col className="card">
                          <Form>
                            <Row>
                              <Col xs={4} md={3}>
                              <span
                                className="d-inline-block select-search-rma"
                                data-toggle="popover"
                                data-trigger="focus"
                                data-content="Please selecet account(s)"
                            >
                                <ReactSelect title="Range:"
                                options={options}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                components={{
                                    Option
                                }}
                                onChange={this.handleChange}
                                allowSelectAll={true}
                                value={this.state.optionSelected}
                                />
                            </span>
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
