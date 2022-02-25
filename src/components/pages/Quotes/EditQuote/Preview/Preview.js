import React from 'react';
import Comments from './Parts/Comments';
import GeneralInformation from './Parts/GeneralInformation';
import QuoteInputs from './Parts/QuoteInputs';
import SetCommission from './Parts/SetCommission';
import SetCoverPremium from './Parts/SetCoverPremium';
import TotalCalculation from './Parts/TotalCalculation';

export default function Preview({nextStep}) {
  return (
    <div className="preview-card">
        <h2>Please confirm if your information is accurate.</h2>
        <div className="preview-info-container general-info">
            <div className="title-wrapper">
                <h3>General Information</h3>
            </div>
            <div className="info-container">
                <GeneralInformation />
                <div className="dotted-line"></div>
                <SetCoverPremium />
                <div className="dotted-line"></div>
                <SetCommission />
            </div>
        </div>
        <div className="preview-info-container tables">
            <div className="title-wrapper">
                <h3>Quote Inputs</h3>
            </div>
            <QuoteInputs />
        </div>
        <TotalCalculation />
        <Comments />
        <div className="form-action text-end mt-3">
            <button type="button" className="btn btn-primary show-thankyou" onClick={nextStep}>Save &amp; Draw Quote</button>
        </div>
    </div>
  );
};
