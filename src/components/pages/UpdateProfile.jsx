import React, {useState, useMemo} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import updateProfile from '../assets/img/updateProfile.svg';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from "react-datepicker";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Select from 'react-select'
import countryList from 'react-select-country-list';



export default function UpdateProfile() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  
  return (
    <section className="update-profile">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Update Profile</h1>
            </Col>
          </Row>
          <div className="update-profile-form">
            <div className="card product-wrap" >
              <div className="card-body">
                <Form className="row has-label-on-border">
                  <Form.Group className="col-12 d-flex justify-content-center pb-5">
                        <div className="profile-img">
                          <Form.Label htmlFor="upload-img" className="custom-file-upload">
                                <img src={ updateProfile } alt="update-profile" width="100%"/>
                                <EditIcon/>
                            </Form.Label>
                            <Form.Control type="file" id="upload-img" accept=".jpg, .jpeg, .png"/>

                        </div>
                    </Form.Group>
                  <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                  <Form.Group className="col-6 mb-3 form-group" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number </Form.Label>
                    <div className="mobile-with-country">
                      <div className="country-sec">
                          <Select options={options} value={value} onChange={changeHandler} className="country-code-rma" />
                      </div>
                      <div className="number-sec">
                        <Form.Control type="number" placeholder="" />
                      </div>
                    </div>
                    

                  </Form.Group>
                  <Form.Group className="col-6 mb-3 form-group date-of-birth-ip">
                    <Form.Label>Date of birth</Form.Label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <EventAvailableIcon/>
                  </Form.Group>
                
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
