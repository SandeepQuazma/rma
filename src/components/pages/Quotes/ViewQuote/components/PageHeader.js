import React from 'react';

export default function PageHeader() {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="page-title d-flex align-items-center">eSoft Development &amp; Technologies <span className="version-edition ms-2">V 5.0</span></h1>
        <a href="/version-logs" type="button" className="btn btn-primary-outline btn-sm">
            <span className="mdi mdi-arrow-left"></span> Back
        </a>
    </div>
  );
};
