import React from 'react';

export default function PageHeader() {
  return (
    <>
        <div className="d-flex justify-content-between align-items-center pb-3">
            <h1 className="page-title m-0">Quotes</h1>
            <div className="btn-wrapper">
              <a href="/edit-quote" type="button" className="draw-new-quote btn btn-primary btn-sm me-2">
                <span className="mdi mdi-plus"></span> Draw New Quote
              </a>
              <button type="button" className="btn btn-primary-outline btn-sm">
                <span className="mdi mdi-filter-outline"></span>
              </button>
            </div>
        </div>
    </>
    );
};