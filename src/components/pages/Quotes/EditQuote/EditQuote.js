import React, { useEffect, useState } from 'react';
import Tabs from './Components/Tabs';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import QuoteInputs from './QuoteInputs/QuoteInputs';
import Preview from './Preview/Preview';
import SuccessFailer from './SuccessFailer/SuccessFailer';

export default function EditQuote() {
    const [step, setStep] = useState(1);
    const [ageband, setAgeBand] = useState();
    const [premiumOption, setPremiumOption] = useState();
    useEffect(() => {
        document.body.classList.add("page-calculator");
    },[])

   const  getAgeBand=(data,option)=>{
      setAgeBand(data)
      let uniqOption=option.filter((item,index) => 
    option.indexOf(item) === index && String(item).length>0).map(Number).sort(function(a, b){return a-b});
    setPremiumOption(uniqOption)
    }
    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setStep(step + 1);
    }

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setStep(step - 1);
    }
    
    
    // javascript switch case to show different form in each step
    switch(step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (
                <div className="page-wrapper pt-3 pb-3">
                    <div className="container">
                        <div className="has-label-on-border">
                            <Tabs stepNum={step} />
                            {/* Stepper Content */}
                            {/* Step 1 */}
                            <div className="add-quotes-wrapper">
                                <GeneralInfo nextStep={nextStep} getAgeBand={getAgeBand} />
                            </div>
                        </div>
                    </div>
                </div>
            );  
        case 2: 
            return(
                <div className="page-wrapper pt-3 pb-3">
                    <div className="container">
                        <div className="has-label-on-border">
                            <Tabs stepNum={step} />
                            {/* Stepper Content */}
                            {/* Step 2 */}
                            <div className="add-quotes-wrapper">
                                <QuoteInputs nextStep={nextStep} prevStep={prevStep} ageband={ageband} premiumOption={premiumOption}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 3: 
            return(
                <div className="page-wrapper pt-3 pb-3">
                    <div className="container">
                        <div className="has-label-on-border">
                            <Tabs stepNum={step} />
                            {/* Step 3 */}
                            <div className="add-quotes-wrapper">
                                <Preview nextStep={nextStep}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 4: 
            return(
                <div className="page-wrapper pt-3 pb-3">
                    <div className="container">
                        <div className="has-label-on-border">
                            <Tabs stepNum={step} />
                            {/* Stepper Content */}
                            {/* Step 4 */}
                            <div className="add-quotes-wrapper">
                                <SuccessFailer />
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="App">
                </div>
            );
    }
//   return (
    
//   );
};
