import React from 'react';

export default function ObjectExecutiveCol() {
  return (
    <div className="d-flex align-items-start executives-listing">
        <div className="img-wrapper">
            <img src={Broker}  alt="top broker" />
        </div>
        <div className="executive-info ml-3">
        <span className="d-block executive-name">John Doe</span>
        <div className="d-flex justify-content-between mb-1">
            <div className="quote-count">
                <i className="rma rma-copy mr-1"></i> 77
            </div>
            <div className="quote-value">
                <i className="rma rma-caret-up text-success ml-2"></i> 5 %
            </div>
        </div>
        <div className="d-flex justify-content-between">
            <div className="quote-count">
            <i className="rma rma-money-hand mr-1"></i> R 74473
            </div>
            <div className="quote-value">
            <i className="rma rma-caret-up text-success ml-2"></i> 7 %
            </div>
        </div>
        </div>
    </div>
  )
}
