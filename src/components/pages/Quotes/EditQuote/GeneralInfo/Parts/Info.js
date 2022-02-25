import React, { useState } from 'react';


export default function Info({handleChange,values}){

  return (
      <>
        <h6 className="mb-3">General Info</h6>
        <div className="card has-box-shadow">
            <div className="card-body">
            <div className="row">
                <div className="col-md-4 form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" className="form-control" id="companyName" value={values.companyName} name='companyName'  onChange={handleChange}/>
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="contactPerson">Contact Person</label>
                    <input type="text" className="form-control" name='contactPerson' value={values.contactPerson}  id="contactPerson"  onChange={handleChange}/>
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name='email' value={values.email} id="email"  onChange={handleChange}/>
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" name='phone' id="phone" value={values.phone}  onChange={handleChange}/>
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="address1">Address</label>
                    <input type="text" className="form-control" name='address' id="address1" value={values.address}  onChange={handleChange}/>
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="suburb">Suburb</label>
                    <input type="text" className="form-control" name='suburb' value={values.suburb} id="suburb" onChange={handleChange}/>
                </div>
                <div className="col-md-4 form-group">
                    <label>City / Town</label>
                    <select className="form-control"name='city' value={values.city} defaultValue={'Select'} onChange={handleChange}>
                        <option>Select</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="randburg" >Randburg</option>
                    </select>
                </div>
                <div className="col-md-4 form-group">
                    <label>Province</label>
                    <select className="form-control" name='Province' value={values.province} defaultValue={'Select'}  onChange={handleChange}>
                        <option  >Select</option>
                        <option value="gauteng">Gauteng</option>
                    </select>
                </div>
                <div className="col-md-4 form-group mb-0">
                    <label htmlFor="postal">Postal</label>
                    <input type="text" className="form-control" name='postal' value={values.postal} id="postal" onChange={handleChange}/>
                </div>
            </div>
            </div>
        </div>
      </>
  );
};
