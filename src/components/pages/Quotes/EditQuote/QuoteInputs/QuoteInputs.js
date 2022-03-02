import React, { useState, useEffect } from 'react';
import Over64 from './Over64/Over64';
import Under64 from './Under64/Under64';
import Over85 from './Over85/Over85';
// import { useSelector } from 'react-redux';
import Preloader from '../../../preloader.jsx';
import { getTabState } from '../../../../../features/quotes/slices/QuotesInfo';
import { useDispatch, useSelector } from 'react-redux';
export default function QuoteInputs({ nextStep, ageband, premiumOption, handlePremiumData, productDetails, generalInfo }) {
  // const {productDetails}  = useSelector((state) => state.quotesInfo);
  const [activeTab, setActiveTab] = useState(ageband[0].label);

  const [tabInfo, settabInfo] = useState({
    band: { ...ageband[0] },
    option: {}
  });


  // option:productDetails?{ ...productDetails.data.product_option_label[0]}:{}
  const dispatch = useDispatch();


  // useEffect(()=>{
  //   if(productDetails !=="" && tabInfo.option !== productDetails.data.product_option_label[0] ){
  //   productDetails? settabInfo((prev)=>({...prev,option:{ ...productDetails?.data.product_option_label[0]}})):null
  //   }

  // },[productDetails,activeTab])

  // const {productDetails}  = useSelector((state) => state.quotesInfo);

  useEffect(() => {
    productDetails ? settabInfo((prev) => ({ ...prev, option: { ...productDetails?.data.product_option_label[0] } })) : { "some isue": "some isue" }
    if (productDetails !== "" && tabInfo.option !== productDetails.data.product_option_label[0]) {
    }


  }, [productDetails])
  const menuClicked = () => {
    console.log("clicked")
    settabInfo((prev) => ({ ...prev, option: { ...productDetails?.data.product_option_label[0] } }))
  }
  useEffect(() => {
    console.log('dispatch');
    dispatch(getTabState(tabInfo)).unwrap()
      .then((res) => {

      })
      .catch((e) => {
        console.log(e);

      });
  }, [tabInfo])
  if (!productDetails) {
    return <Preloader />
  }

  const tabHandle = (label, band) => {
    setActiveTab(label)
    settabInfo((prev) => ({ ...prev, band: { ...ageband[0] } }));

    console.log(band);
  }

  const handlepreview = () => {
    generalInfo.premiums = [];
    let headWithValue = JSON.parse(localStorage.getItem("premiumInputs") || "[]");
    headWithValue.forEach((data, i) => {
      console.log(data.tab.split("-"))
    });
    console.log(generalInfo);
    // nextStep();
  }

  console.log("tabinfo : ", tabInfo);
  return (
    <>
      {/* Tabs */}
      { }

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {ageband.map((val, i) => {
          return <li className="nav-item" key={i}>
            <a className={"nav-link " + (activeTab === val.label ? 'active' : '')} onClick={() => { setActiveTab(val.label); console.log("meeenu"); menuClicked(); settabInfo((prev) => ({ ...prev, band: { ...val } })) }}>
              <div>{val.label} </div>
              <div className="cover-info" >
                <span className="t-person me-2"><i className="rma rma-user"></i> 169</span>
                <span className="t-pay"><i className="rma rma-umbrella"></i> R 20686.26</span>
              </div>
            </a>
          </li>
        })}



      </ul>
      {/* tab content */}
      <div className="card gray-card">
        <div className="card-body">
          <div className="tab-content">

            {activeTab === tabInfo.band.label ? <Under64 handlePremiumData={handlePremiumData} tabInfo={tabInfo} settabInfo={settabInfo} productDetails={productDetails} premiumOption={premiumOption} /> : ''}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="yearly-premium-wrapper">
          <span>Premium for <span className="text-large">244</span> Members is <span className="text-large">R <span className="monthly-total">33637.01</span>/Month</span> or <span className="text-large">R <span className="yearly-total">403644.12</span>/Year</span></span>
        </div>
        <div className="preview-btn-wrapper text-right ml-2">
          <button className="btn btn-primary w-100 btn-lg show-preview" onClick={handlepreview}>Preview Quote</button>
        </div>
      </div>
    </>
  );
};
