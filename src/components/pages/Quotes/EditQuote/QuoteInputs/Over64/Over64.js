import React, { useState } from 'react';
import AE from './Parts/AE';
import MO from './Parts/MO';
import MP from './Parts/MP';
import MSU6C from './Parts/MSU6C';

export default function Over64({productDetails}) {
  console.log(productDetails)
  const [activeO64Tab, setActiveO64Tab] = useState("MO");
  return(
    <div className="tab-pane fade show active" >
      <nav className="nav nav-pills nav-justified">
        <a className={"nav-item nav-link " + (activeO64Tab === 'MO' ? 'active' : '')} onClick={() => setActiveO64Tab('MO')}>
          <div className="tab-title">Member Only</div>
          <div className="cover-info">
              <span className="t-person me-2"><i className="rma rma-user"></i> 12</span> 
              <span className="t-pay"><i className="rma rma-umbrella"></i> R 839.00</span>
          </div>
        </a>
        <a className={"nav-item nav-link " + (activeO64Tab === 'MSU6C' ? 'active' : '')} onClick={() => setActiveO64Tab('MSU6C')}>
          <div className="tab-title">Member, Spouse and up to 6 children</div>
          <div className="cover-info">
              <span className="t-person me-2"><i className="rma rma-user"></i> 46</span> 
              <span className="t-pay"><i className="rma rma-umbrella"></i> R 6200.00</span>
          </div>
        </a>
        <a className={"nav-item nav-link " + (activeO64Tab === 'MP' ? 'active' : '')} onClick={() => setActiveO64Tab('MP')}>
          <div className="tab-title">Member, Spouse, up to 6 Children, up to 4 Parents and up to 4 other Members</div>
          <div className="cover-info">
              <span className="t-person me-2"><i className="rma rma-user"></i> 1</span> 
              <span className="t-pay"><i className="rma rma-umbrella"></i> R 416.00</span>
          </div>
        </a>
        <a className={"nav-item nav-link " + (activeO64Tab === 'AE' ? 'active' : '')} onClick={() => setActiveO64Tab('AE')}>
            <div className="tab-title">Additional Extended</div>
            <div className="cover-info">
                <span className="t-person me-2"><i className="rma rma-user"></i> 12</span> 
                <span className="t-pay"><i className="rma rma-umbrella"></i> R 4463.72</span>
            </div>
        </a>
      </nav>
      <div className="card has-border-blue">
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            {activeO64Tab === 'MO' ? <MO /> : ''}
            {activeO64Tab === 'MSU6C' ? <MSU6C /> : ''}
            {activeO64Tab === 'MP' ? <MP /> : ''}
            {activeO64Tab === 'AE' ? <AE /> : ''}
          </div>
        </div>
      </div>
    </div>
    
  );
};
