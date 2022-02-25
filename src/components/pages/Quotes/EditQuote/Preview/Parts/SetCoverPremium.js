import React from 'react';

export default function SetCoverPremium(){
  return (
      <>
        <h4>Set Cover Premiums</h4>
        <div className="row">
            <div className="col-lg-5 field-wrapper">
                <div className="label">Option 1</div>
                <div className="value">R 5000</div>
            </div>
            <div className="col-lg-4 field-wrapper">
                <div className="label">Option 2</div>
                <div className="value">R 10000</div>
            </div>
            <div className="col-lg-3 field-wrapper">
                <div className="label">Option 3</div>
                <div className="value">R 15000</div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5 field-wrapper">
                <div className="label">Option 4</div>
                <div className="value">R 20000</div>
            </div>
            <div className="col-lg-4 field-wrapper">
                <div className="label">Option 5</div>
                <div className="value">R 22000</div>
            </div>
            <div className="col-lg-3 field-wrapper">
                <div className="label">Option 6</div>
                <div className="value">R 30000</div>
            </div>
        </div>
      </>
  );
};
