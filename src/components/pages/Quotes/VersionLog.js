import React, { useEffect } from 'react';

export default function VersionLog(){
    useEffect(() => {
        document.body.classList.add("page-version-logs");
        document.body.classList.add("page-quotes-listing");
    },[])
  return (
    <div className="page-wrapper pt-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
            <h1 className="page-title d-flex align-items-center">eSoft Development &amp; Technologies</h1>
            <a href="/quotes" type="button" className="btn btn-primary-outline btn-sm">
                <span className="mdi mdi-arrow-left"></span> Back
            </a>
        </div>
        <div className="timeline">
            <div className="container-timeline left content-success" onClick="openViewQuotes(event)">
                <div className="card listing-card cursor-pointer">
                    <div className="card-body">
                        <h4 className="list-title">eSoft Development &amp; Technologies</h4>
                        <div className="quote-version">V <span className="version-no">5.0</span></div>
                        <div className="inner-content">
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-help-desk"></i>John Doe</span>
                                <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-user"></i><b>169</b> Members</span>
                                <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 403644.22</b></span>
                            </div>
                            <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                                <div className="icons-field">
                                    <a href="/sample.csv" download="">
                                        <i className="text-orange rma rma-download mr-2"></i>
                                    </a>
                                    <a href="#">
                                        <i className="text-orange rma rma-email"></i>
                                    </a>
                                </div>
                                <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Simbi on 25-11-2021 18:00</span>
                            </div>
                            <div className="update-comment">
                                <i className="rma rma-quote2-right mr-0"></i> Added 2 new members and updated the quote options.<i className="rma rma-quote2-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-timeline right content-prev" onClick="openViewQuotes(event)">
                <div className="card listing-card cursor-pointer">
                    <div className="card-body">
                        <h4 className="list-title">eSoft Development &amp; Technologies</h4>
                        <div className="quote-version">V <span className="version-no">4.0</span></div>
                        <div className="inner-content">
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-help-desk"></i>John Doe</span>
                                <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-user"></i><b>169</b> Members</span>
                                <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 403644.22</b></span>
                            </div>
                            <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                                <div className="icons-field">
                                    <a href="/sample.csv" download="">
                                        <i className="text-orange rma rma-download mr-2"></i>
                                    </a>
                                    <a href="#">
                                        <i className="text-orange rma rma-email"></i>
                                    </a>
                                </div>
                                <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Simbi on 25-11-2021 18:00</span>
                            </div>
                            <div className="update-comment">
                                <i className="rma rma-quote2-right mr-0"></i> Based on the discussion today updated the members under Over 65. <i className="rma rma-quote2-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-timeline left content-prev" onClick="openViewQuotes(event)">
                <div className="card listing-card cursor-pointer">
                    <div className="card-body">
                        <h4 className="list-title">eSoft Development &amp; Technologies</h4>
                        <div className="quote-version">V <span className="version-no">3.0</span></div>
                        <div className="inner-content">
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-help-desk"></i>John Doe</span>
                                <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-user"></i><b>169</b> Members</span>
                                <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 403644.22</b></span>
                            </div>
                            <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                                <div className="icons-field">
                                    <a href="/sample.csv" download="">
                                        <i className="text-orange rma rma-download mr-2"></i>
                                    </a>
                                    <a href="#">
                                        <i className="text-orange rma rma-email"></i>
                                    </a>
                                </div>
                                <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Simbi on 25-11-2021 18:00</span>
                            </div>
                            <div className="update-comment">
                                <i className="rma rma-quote2-right mr-0"></i> There was request from customer to re-look into the prices. <i className="rma rma-quote2-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-timeline right content-prev" onClick="openViewQuotes(event)">
                <div className="card listing-card cursor-pointer">
                    <div className="card-body">
                        <h4 className="list-title">eSoft Development &amp; Technologies</h4>
                        <div className="quote-version">V <span className="version-no">2.0</span></div>
                        <div className="inner-content">
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-help-desk"></i>John Doe</span>
                                <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-user"></i><b>169</b> Members</span>
                                <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 403644.22</b></span>
                            </div>
                            <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                                <div className="icons-field">
                                    <a href="/sample.csv" download="">
                                        <i className="text-orange rma rma-download mr-2"></i>
                                    </a>
                                    <a href="#">
                                        <i className="text-orange rma rma-email"></i>
                                    </a>
                                </div>
                                <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Simbi on 25-11-2021 18:00</span>
                            </div>
                            <div className="update-comment">
                                <i className="rma rma-quote2-right mr-0"></i> There was request from customer to re-look into the prices. <i className="rma rma-quote2-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-timeline left content-prev" onClick="openViewQuotes(event)">
                <div className="card listing-card cursor-pointer">
                    <div className="card-body">
                        <h4 className="list-title">eSoft Development &amp; Technologies</h4>
                        <div className="quote-version">V <span className="version-no">1.0</span></div>
                        <div className="inner-content">
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-help-desk"></i>John Doe</span>
                                <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className="w-50"><i className="rma rma-user"></i><b>169</b> Members</span>
                                <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 403644.22</b></span>
                            </div>
                            <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                                <div className="icons-field">
                                    <a href="/sample.csv" download="">
                                        <i className="text-orange rma rma-download mr-2"></i>
                                    </a>
                                    <a href="#">
                                        <i className="text-orange rma rma-email"></i>
                                    </a>
                                </div>
                                <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Simbi on 25-11-2021 18:00</span>
                            </div>
                            <div className="update-comment">
                                <i className="rma rma-quote2-right mr-0"></i> There was request from customer to re-look into the prices. <i className="rma rma-quote2-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  );
};
