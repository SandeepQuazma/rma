import React from 'react';
import ThankYouImg from '../../../../assets/img/thank_you.svg';

export default function SuccessFailer(){
  return (
    <div className="thank-you">
        <div className="card">
            <div className="card-body text-center">
                <div className="image-wrapper">
                    <img src={ThankYouImg} alt="" />
                </div>
                <div className="text-container">
                    <p>Quote generated successfully for </p>
                    <p className="text-bold">eSoft Development &amp; Technologies</p>
                    <div className="quote-values-container">
                        <div className="quote-value"><span className="rma-user me-2"></span>Members : 244</div>
                        <div className="quote-value"><span className="rma-sum me-2"></span>Monthly : R 33697.01</div>
                        <div className="quote-value right-border"><span className="rma-premium-1 me-2"></span>Monthly : R 403644.12</div>
                    </div>
                </div>
                <div className="download-links mt-3">
                    <a href="/sample.pdf" download className="btn btn-primary me-2 downloadPdf" id="downloadPDF"><span className="rma-pdf-file me-2"></span>Download PDF</a>
                    <a href="/sample.csv" download className="btn btn-primary me-2 " data-toggle="modal" data-target="#add-comment"><span className="rma-mail-sent-1 me-2"></span>Send Email</a>
                </div>
            </div>
        </div>
    </div>
  );
};
