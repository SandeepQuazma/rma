import React from 'react';

export default function GeneralInformation(){
  return (
    <div className="row">
        <div className="col-lg-5 field-wrapper">
            <div className="label">Company Name</div>
            <div className="value">eSoft Development &amp; Technologies</div>
        </div>
        <div className="col-lg-4 field-wrapper">
            <div className="label">Contact Person</div>
            <div className="value">John Doe</div>
        </div>
        <div className="col-lg-3 field-wrapper">
            <div className="label">Email</div>
            <div className="value">johndoe@yopmail.com</div>
        </div>
        <div className="col-lg-5 field-wrapper">
            <div className="label">Phone</div>
            <div className="value">+27 57001252</div>
        </div>
        <div className="col-lg-4 field-wrapper">
            <div className="label">Address</div>
            <div className="value">Unit 7, Somerset Business Park</div>
        </div>
        <div className="col-lg-3 field-wrapper">
            <div className="label">Suburb</div>
            <div className="value">Kensington-B</div>
        </div>
        <div className="col-lg-5 field-wrapper">
            <div className="label">City / Town</div>
            <div className="value">Randburg</div>
        </div>
        <div className="col-lg-4 field-wrapper">
            <div className="label">Province</div>
            <div className="value">Gauteng</div>
        </div>
        <div className="col-lg-3 field-wrapper">
            <div className="label">Postal</div>
            <div className="value">2000</div>
        </div>
    </div>
  );
};
