import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import style from  '../assets/sass/layout/menu.scss';


class Menu extends Component {
  render() {
      return (
        <Navbar expand="lg" className="rma-navbar">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} width="100"  className="App-logo" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item className="nav-rma-padding"><Link to="/dashboard">Dashboard</Link></Nav.Item>
                <NavDropdown title="Manage" id="basic-nav-dropdown" className="manage-rma-dropdown">
                  <NavDropdown.Item><Link to="/roles">Roles</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/action">Action</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/users">Users</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/products">Products</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/range-tables">Range Tables</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/scheme-settings">Schemes Settings</Link></NavDropdown.Item>
                </NavDropdown>  
                <Nav.Item className="nav-rma-padding"><Link to="/quotes">Quotes</Link></Nav.Item>
                  
              </Nav>
              <Nav>
                <Nav.Item className="nav-rma-padding nolink-lastlogin"><strong>Last Login on :</strong><br/>30-11-2021 at 14:47</Nav.Item>
                <NavDropdown title="SM" className="user-dropdown-rma">
                  <NavDropdown.Item>Simbisai Mache<br/>Broker Manager</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to="/change-password">Change Password</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/update-profile">Update Profile</Link></NavDropdown.Item>
                  <NavDropdown.Item><span onClick={this.props.handleignout}>Signout</span></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
    )
  }
}

export default Menu;
