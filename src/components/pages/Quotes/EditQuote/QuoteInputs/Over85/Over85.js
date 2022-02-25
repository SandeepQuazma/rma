import React, { useState } from 'react';
import AE from './Parts/AE';
import MO from './Parts/MO';
import MP from './Parts/MP';
import MSU6C from './Parts/MSU6C';

export default function Over85() {
  const [activeO85Tab, setActiveO85Tab] = useState("MO");
  return(
    <div className="tab-pane fade show active" >
      <nav className="nav nav-pills nav-justified">
        <a className={"nav-item nav-link " + (activeO85Tab === 'MO' ? 'active' : '')} onClick={() => setActiveO85Tab('MO')}>
          <div className="tab-title">Member Only</div>
          <div className="cover-info">
              <span className="t-person me-2"><i className="rma rma-user"></i> 3</span> 
              <span className="t-pay"><i className="rma rma-umbrella"></i> R 187.00</span>
          </div>
        </a>
        <a className={"nav-item nav-link " + (activeO85Tab === 'MSU6C' ? 'active' : '')} onClick={() => setActiveO85Tab('MSU6C')}>
          <div className="tab-title">Member, Spouse and up to 6 children</div>
          <div className="cover-info">
              <span className="t-person me-2"><i className="rma rma-user"></i> 0</span> 
              <span className="t-pay"><i className="rma rma-umbrella"></i> R 0.00</span>
          </div>
        </a>
        <a className={"nav-item nav-link " + (activeO85Tab === 'MP' ? 'active' : '')} onClick={() => setActiveO85Tab('MP')}>
          <div className="tab-title">Member, Spouse, up to 6 Children, up to 4 Parents and up to 4 other Members</div>
          <div className="cover-info">
              <span className="t-person me-2"><i className="rma rma-user"></i> 0</span> 
              <span className="t-pay"><i className="rma rma-umbrella"></i> R 0.00</span>
          </div>
        </a>
        <a className={"nav-item nav-link " + (activeO85Tab === 'AE' ? 'active' : '')} onClick={() => setActiveO85Tab('AE')}>
            <div className="tab-title">Additional Extended</div>
            <div className="cover-info">
                <span className="t-person me-2"><i className="rma rma-user"></i> 1</span> 
                <span className="t-pay"><i className="rma rma-umbrella"></i> R 633.03</span>
            </div>
        </a>
    </nav>
    <div className="card has-border-blue">
      <div className="card-body">
        <div className="tab-content" id="pills-tabContent">
          {activeO85Tab === 'MO' ? <MO /> : ''}
          {activeO85Tab === 'MSU6C' ? <MSU6C /> : ''}
          {activeO85Tab === 'MP' ? <MP /> : ''}
          {activeO85Tab === 'AE' ? <AE /> : ''}
        </div>
      </div>
    </div>
    </div>
  );
};
