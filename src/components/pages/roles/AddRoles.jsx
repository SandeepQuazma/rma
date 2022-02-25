import React, {Component} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import style from  '../../assets/sass/pages/roles-table.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default class AddRoles extends Component {
  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */}
  }
   
  render(){
    return (
      <div  className={`filter sm ${this.props.isMenuOpen === true ? 'filter-show' : ''}`}>
              <div className="backdrop" ></div>
              <div className="filter-content" style={{transform: 'translateX(0px)'}}>
                  <div className="filter-header d-flex">
                    <span onClick={this.props.onMenuToggle}  style={{cursor:'pointer'}}><ArrowBackIcon/></span>                &nbsp;&nbsp;
                      <h2>Add Role</h2>
                  </div>
                  <div className="filter-body">
                      <Form action="" className="has-label-on-border">
                        <Form.Group className="col-4 mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Role Name </Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="col-4 mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Select Role Type </Form.Label>
                          <Form.Select aria-label="Default select example" title="--">
                                  <option value="I">Internal</option>
                                  <option value="E">External</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group>
                          <button type="submit" className="btn-primary btn">Submit</button>
                        </Form.Group>
                      </Form>
                  </div>
              </div>
            </div> 
    )
  }
 
}
