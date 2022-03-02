import React, { useEffect, useState } from 'react';
import Tabs from './Components/Tabs';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import QuoteInputs from './QuoteInputs/QuoteInputs';
import Preview from './Preview/Preview';
import SuccessFailer from './SuccessFailer/SuccessFailer';
import { getPremium } from '../../../../features/quotes/slices/QuotesInfo';
import {useDispatch,useSelector} from 'react-redux';
export default function EditQuote() {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const [ageband, setAgeBand] = useState();
    const [generalInfo, setGeneralInfo] = useState();
    const [premiumOption, setPremiumOption] = useState();
    //    const [premiumData,setPremiumData] = useState([])
    const {productDetails}  = useSelector((state) => state.quotesInfo);
    const premiumData = new Map();
    const handlePremiumData = (data) => {
        if (premiumData.length > 0) {
            for (const [key, val] of Object.entries(premiumData)) {
                console.log(key, val);
                console.log("main-----1", val);
                if (val.age_band_id === data.age_band_id && val.label_id === data.label_id && val.cover_amount === data.cover_amount) {
                    val.members = data.members
                } else {
                    console.log('new valuee......')
                    premiumData.set(`${data.age_band_id}-${data.label_id}-${data.cover_amount}`, data)
                }
            }

        } else {
            premiumData.set(`${data.age_band_id}-${data.label_id}-${data.cover_amount}`, data)
            console.log("main-----2", premiumData);

        }
        console.log(data);
        console.log("main-----3", premiumData);
     

    }
useEffect(()=>{
console.log("work==")
},[premiumData])


    useEffect(() => {
        document.body.classList.add("page-calculator");
    }, [])

    const getAgeBand = (data, general) => {
        setAgeBand(data)
        setGeneralInfo(general)
        const { cover_amount1, cover_amount2, cover_amount3, cover_amount4, cover_amount5, cover_amount6 } = general
        const option = [cover_amount1, cover_amount2, cover_amount3, cover_amount4, cover_amount5, cover_amount6]
        let uniqOption = option.filter((item, index) =>
            option.indexOf(item) === index && String(item).length > 0).map(Number).sort(function (a, b) { return a - b });
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
    switch (step) {
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
            return (
                <div className="page-wrapper pt-3 pb-3">
                    <div className="container">
                        <div className="has-label-on-border">
                            <Tabs stepNum={step} />
                            {/* Stepper Content */}
                            {/* Step 2 */}
                            <div className="add-quotes-wrapper">
                                <QuoteInputs nextStep={nextStep} generalInfo={generalInfo} handlePremiumData={handlePremiumData} prevStep={prevStep} productDetails={productDetails} ageband={ageband} premiumOption={premiumOption} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="page-wrapper pt-3 pb-3">
                    <div className="container">
                        <div className="has-label-on-border">
                            <Tabs stepNum={step} />
                            {/* Step 3 */}
                            <div className="add-quotes-wrapper">
                                <Preview nextStep={nextStep} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 4:
            return (
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
