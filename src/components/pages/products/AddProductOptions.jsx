import React, {useState} from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import style from  '../../assets/sass/pages/actions.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const AddProductOptions = () => {
  const [inputFields, setInputFields] = useState([
    { clientType: '', count: ''}
  ]);
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "clientType") {
      values[index].clientType = event.target.value;
    } 
    else{
      values[index].count = event.target.value;
    }

    setInputFields(values);
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({clientType: '', count: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <section className="edit-role-access add-role-access">
        <Container>
          <Row>
            <Col className="">
              <h1 className="page-title m-0">Add Product Options</h1>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <p className="align-content-right justify-flex-end">
                <Link to="/product-options">
                  <Button className="btn btn-primary-outline btn-sm">< ArrowBackIcon/>&nbsp;&nbsp;Back</Button>
                </Link>
              </p>
              </Col>
          </Row>
          <div className="product-option-add-form">
              <div className="card product-wrap" >
                  <div className="card-body">
                  <Form className="row has-label-on-border">
                            <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            
                            </Form.Group>
                            <Form.Group className="col-8 mb-3 form-group" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Label</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <h5>Product Options</h5>
                            <Table bordered className="form-inside-table">
                            <thead>
                                <tr>
                                <th>Client Type</th>
                                <th>Count</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {inputFields.map((inputField, index) => (
                                  <tr  key={`${inputField}~${index}`}>
                                      <td>
                                          <Form.Select aria-label="Default select example" title="--" name="clientType" value={inputField.clientType} onChange={event => handleInputChange(index, event)}>
                                          <option value="Qoute Admin">Main Member</option>
                                          <option value="Qoute Admin">Spouse</option>
                                          <option value="Qoute Admin">Children</option>
                                          </Form.Select>
                                      </td>
                                      <td><Form.Control type="text" placeholder="" name="count" value={inputField.count} onChange={event => handleInputChange(index, event)}/></td>
                                      <td className="action-class-icon"><button type="button" className="removeRepeterFields" onClick={() => handleRemoveFields(index)}><DeleteOutlineIcon/></button></td>
                                  </tr>
                                ))}
                                
                                </tbody>
                            </Table>

                            <div className="col-12 d-flex flex-row-reverse"> 
                                <button type="submit" onClick={(e) => {e.preventDefault();handleAddFields()}} className="btn btn-primary-outline mr-1">Add Option</button>
                            </div>
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

export default AddProductOptions