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
  { value: 'Quote Admin', label: 'Quote Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'OPS Manager', label: 'OPS Manager' },
  { value: 'Broker Admin', label: 'Broker Admin' },
  { value: 'Broker Manager', label: 'Broker Manager' },
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
                   <h1 className="page-title m-0">Roles</h1>
               </Col>
               <Col className="d-flex flex-row-reverse">
                 <Row>
                   <Col>
                       <button type="button" className="btn btn-primary-outline btn-sm active">
                       <FilterAltIcon/>
                   </button>
                   </Col>
                   <Col onClick={this.props.onMenuToggle}>
                         <button type="button" className="btn btn-primary btn-sm mr-1" >
                       <AddIcon/>&nbsp;&nbsp;Add Roles
                       </button>
                   </Col>
                 </Row>
               
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
                         <ReactSelect
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
                       <Col xs={4} md={3}>
                             <Form.Select aria-label="Default select example" title="Select Status">
                               <option value="Active">Active</option>
                               <option value="Inactive">Inactive</option>
                               <option value="Deactive">Deactive</option>
                           </Form.Select>
                       </Col>
                       <Col xs={4} md={6} className='d-flex flex-row-reverse'>
                                 <div className="btn-action">
                             <button type="submit" className="btn-primary btn">Submit</button>
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
