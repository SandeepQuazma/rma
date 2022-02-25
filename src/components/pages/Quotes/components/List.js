import React from 'react';

export default function List(){
  return (
    <div className="row">
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
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
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Simbi on 25-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">ABC Pvt Ltd.</h4>
                    <div className="quote-version">V <span className="version-no">3.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Johnson</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>180</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 480000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Unil on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">One Star Solutions</h4>
                    <div className="quote-version">V <span className="version-no">6.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.22</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Sohail on 20-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Onestop Technologies</h4>
                    <div className="quote-version">V <span className="version-no">4.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Bhavika Petel</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>50</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 180000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Imran on 18-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Altron Managed Solutions</h4>
                    <div className="quote-version">V <span className="version-no">1.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Dharmesh</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57701262</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>350</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 600000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Karan on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">XYZ Network Solution</h4>
                    <div className="quote-version">V <span className="version-no">2.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Samson on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">ABC Pvt Ltd.</h4>
                    <div className="quote-version">V <span className="version-no">3.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Johnson</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>180</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 480000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Unil on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">One Star Solutions</h4>
                    <div className="quote-version">V <span className="version-no">6.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.22</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Sohail on 20-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Onestop Technologies</h4>
                    <div className="quote-version">V <span className="version-no">4.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Bhavika Petel</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>50</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 180000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Imran on 18-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Altron Managed Solutions</h4>
                    <div className="quote-version">V <span className="version-no">1.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Dharmesh</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57701262</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>350</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 600000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Karan on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">XYZ Network Solution</h4>
                    <div className="quote-version">V <span className="version-no">2.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Samson on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">ABC Pvt Ltd.</h4>
                    <div className="quote-version">V <span className="version-no">3.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Johnson</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>180</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 480000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Unil on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">One Star Solutions</h4>
                    <div className="quote-version">V <span className="version-no">6.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.22</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Sohail on 20-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Onestop Technologies</h4>
                    <div className="quote-version">V <span className="version-no">4.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Bhavika Petel</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>50</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 180000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Imran on 18-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Altron Managed Solutions</h4>
                    <div className="quote-version">V <span className="version-no">1.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Dharmesh</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57701262</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>350</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 600000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Karan on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">XYZ Network Solution</h4>
                    <div className="quote-version">V <span className="version-no">2.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Samson on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">ABC Pvt Ltd.</h4>
                    <div className="quote-version">V <span className="version-no">3.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Johnson</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>180</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 480000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Unil on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">One Star Solutions</h4>
                    <div className="quote-version">V <span className="version-no">6.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.22</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Sohail on 20-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Onestop Technologies</h4>
                    <div className="quote-version">V <span className="version-no">4.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Bhavika Petel</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001252</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>50</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 180000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Imran on 18-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">Altron Managed Solutions</h4>
                    <div className="quote-version">V <span className="version-no">1.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Dharmesh</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57701262</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>350</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 600000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Karan on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="card listing-card" onClick="openVersionLogs()">
                <div className="card-body">
                    <h4 className="list-title">XYZ Network Solution</h4>
                    <div className="quote-version">V <span className="version-no">2.0</span></div>
                    <div className="inner-content">
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-help-desk"></i>Caryn Naidu</span>
                            <span className="w-50"><i className="rma rma-call"></i>+27 57001222</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span className="w-50"><i className="rma rma-user"></i><b>150</b> Members</span>
                            <span className="w-50"><i className="rma rma-umbrella"></i>Yearly: <b>R 360000.00</b></span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 align-items-center mt-3 listing-footer">
                            <div className="icons-field">
                                <a href="/sample.csv" download className="download-csv">
                                    <i className="text-orange rma rma-download mr-2"></i>
                                </a>
                                <a href="#">
                                    <i className="text-orange rma rma-email" onClick="sendMail()"></i>
                                </a>
                            </div>
                            <span className="drawn-by"><i className="rma rma-user mr-1"></i>Drawn by Samson on 22-11-2021 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
