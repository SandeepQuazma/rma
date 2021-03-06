import React, { useState,useEffect } from 'react';
import AE from './Parts/AE';
import MO from './Parts/MO';
import MP from './Parts/MP';
import MSU6C from './Parts/MSU6C';
// import Tabs from './Parts/Tabs';
import { useSelector } from 'react-redux';

export default function Under64({productDetails,premiumOption,settabInfo,tabInfo}) {
    // const  optionLabel=productDetails?.data.product_option_label[0].label

    console.log("-----------",tabInfo)
    const {tabState}=useSelector((state)=> state.quotesInfo)
    let tabName = tabInfo.option.label;
    const [activeU64Tab, setActiveU64Tab] = useState();

useEffect(()=>{
    // const  optionLabel=productDetails?.data.product_option_label[0].label
  
   setActiveU64Tab(tabName)
},[tabName])
    console.log("for 3rd UI :",activeU64Tab ,tabInfo.option.label);
  return(
    <div className="tab-pane fade show active" >
        <nav className="nav nav-pills nav-justified">
            {productDetails.data.product_option_label.map((val ,i)=>{
                console.log("label : ",val.label)
                return  <a key={i} className={"nav-item nav-link " + (activeU64Tab === val.label ? 'active' : '')} onClick={() =>{settabInfo((prev)=>({...prev,option:{...val}})); setActiveU64Tab(val.label)}}>
                <div className="tab-title">{val.label}</div>
                <div className="cover-info">
                    <span className="t-person me-2"><i className="rma rma-user"></i> <span id="mo_tu64_m_count">15</span></span> 
                    <span className="t-pay"><i className="rma rma-umbrella"></i> R <span id="mo_tu64_m_tpr">770.00</span></span>
                </div>
            </a>
            })}
            
        </nav>
        <div className="card has-border-blue">
            <div className="card-body">
                
                    {activeU64Tab === tabName ? <MO premiumOption={premiumOption} productDetails={productDetails?.data}/>:null }
                    {/* {productDetails.data.product_option_label.map((val ,i)=>{
                   
                    // {activeU64Tab === "Only Main Member" ? <MO premiumOption={premiumOption} productDetails={productDetails?.data}/>:null }
                 return   <div className="tab-content">
                 {activeU64Tab === val.label ? <MO premiumOption={premiumOption} productDetails={productDetails?.data}/>:null }
                  </div>
               })}                 */}
            
            </div>
        </div>
    </div>
  );
};
