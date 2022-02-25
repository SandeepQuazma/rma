import React, {useState} from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import style from  '../../assets/sass/pages/actions.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const AddProducts = () =>{

  const [inputFields, setInputFields] = useState([
    { label: '', minAge: '', maxAge:'' }
  ]);
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "label") {
      values[index].label = event.target.value;
    } else if (event.target.name === "minAge") {
      values[index].minAge = event.target.value;
    }
    else{
      values[index].maxAge = event.target.value;
    }

    setInputFields(values);
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({label: '', minAge: '' , maxAge:''});
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
              <h1 className="page-title m-0">Add Product</h1>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <p className="align-content-right justify-flex-end">
                <Link to="/products">
                  <Button className="btn btn-primary-outline btn-sm">< ArrowBackIcon/>&nbsp;&nbsp;Back</Button>
                </Link>
              </p>
              </Col>
          </Row>
          <div className="product-add-form">
              <div className="card product-wrap" >
                  <div className="card-body">
                  <Form className="row has-label-on-border">
                        <Form.Group className="col-4 mb-3 form-group" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        
                        </Form.Group>
                        <Form.Group className="col-8 mb-3 " controlId="exampleForm.ControlTextarea1">
                        
                        </Form.Group>
                        <h5>Age Bands</h5>
                        <Table bordered className="form-inside-table">
                        <thead>
                            <tr>
                            <th>Label</th>
                            <th>Min. Age</th>
                            <th>Max. Age</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {inputFields.map((inputField, index) => (
                            <tr  key={`${inputField}~${index}`}>
                              <td><Form.Control type="text" placeholder="" name="label"  value={inputField.label} onChange={event => handleInputChange(index, event)}/></td>
                              <td><Form.Control type="text" placeholder="" name="minAge" value={inputField.minAge} onChange={event => handleInputChange(index, event)} /></td>
                              <td><Form.Control type="text" placeholder="" name="maxAge"  value={inputField.maxAge} onChange={event => handleInputChange(index, event)}  /></td>
                              <td className="action-class-icon"><button type="button" className="removeRepeterFields" onClick={() => handleRemoveFields(index)}><DeleteOutlineIcon/></button></td>
                            </tr>
                        ))}

                          {/* {productRows.map((productRow, i)=>{

                          
                            <tr key={i}>
                              <td><Form.Control type="text" placeholder="" name="label" value={productRow.label} /></td>
                              <td><Form.Control type="text" placeholder="" name="minAge" value={productRow.minAge} /></td>
                              <td><Form.Control type="text" placeholder="" name="maxAge" value={productRow.maxAge}  /></td>
                              <td className="action-class-icon"><button type="button" ><DeleteOutlineIcon/></button></td>
                            </tr>
                            })} */}
                            
                            </tbody>
                        </Table>

                        <div className="col-12 d-flex flex-row-reverse"> 
                            <button type="submit" onClick={(e) => {e.preventDefault();handleAddFields()}} className="btn btn-primary-outline mr-1">Add Range</button>
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

export default AddProducts
