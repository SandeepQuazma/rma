import React from 'react';

export default function PageFooter () {
  return (
    <div className="preview-footer d-flex justify-content-between align-items-center">
        <span className="drwan-text">Drawn by Simbi on 25-11-2021 18:00</span>
        <div className="btn-wrapper">
            <a href="/sample.pdf" download className="btn btn-primary-outline btn-md me-2" id="downloadPDF"><span className="rma-pdf-file ms-2"></span>Download PDF</a>
            <button className="btn btn-primary-outline btn-md me-2" data-toggle="modal" data-target="#add-comment"><span className="rma-mail-sent-1 ms-2"></span>Send Email</button>
            <a href="/edit-quote" className="btn btn-primary btn-md">Update Quote</a>
        </div>
    </div>
  );
};
