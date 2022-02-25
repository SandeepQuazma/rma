import React from 'react'
import { Col } from 'react-bootstrap'

export default function ObjectQuoteCol({quoteData}) {
    console.log(quoteData)
  return (
    <Col xs={6} md={4}>
        <div className="card listing-card" >
            <div className="card-body">
                <h4 className="list-title">{quoteData.company_name}</h4>
                <div className="quote-version">V <span className="version-no">{quoteData.version_number}.0</span></div>
                <div className="inner-content">
                    <div className="d-flex mt-2">
                        <span className="w-50"><i className="rma rma-help-desk"></i>{quoteData.contact_person}</span>
                        <span className="w-50"><i className="rma rma-call"></i>{quoteData.phone}</span>
                    </div>
                    <div className="d-flex mt-2">
                        <span className="w-50"><i className="rma rma-user"></i><b>{quoteData.total_members}</b> Members</span>
                        <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R {quoteData.yearly_premium}</b></span>
                    </div>
                    <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                        <div className="icons-field">
                            <a href="/sample.csv" download className="download-csv">
                                <i className="text-orange rma rma-download mr-2"></i>
                            </a>
                            <a href="#">
                                <i className="text-orange rma rma-email" ></i>
                            </a>
                        </div>
                        <span className="drawn-by"><i className="rma rma-user mr-1"></i>`Drawn by {quoteData.fname} {quoteData.lname} on {quoteData.generated_on}`</span>
                    </div>
                </div>
            </div>
        </div>
    </Col>
  )
}
