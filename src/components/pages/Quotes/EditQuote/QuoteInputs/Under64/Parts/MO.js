import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function MO({premiumOption,productDetails}) {
    const {tabState}=useSelector((state)=> state.quotesInfo)
    console.log(tabState);
    console.log(productDetails);
    const [values,setValues] = useState({})
    const [head,setHead]=useState(0)
    const [tabs,setTabs]=useState(tabState)
     console.log(" tabs.....",tabs)
    const [monthPremium]=productDetails.premium_data.filter((val,i)=>{
return (tabState.band.id ==val.age_band_id && tabState.option.id== val.label_id)
    })
    console.log("primium per month",monthPremium)
    useEffect(()=>{
console.log('tabstate...')
setTabs({})
setValues({})

    },[tabState])
  function handleChange(e) {
    console.log(e.target.value);
    setValues({...values,[e.target.name] : e.target.value });
  }
  const myMap = new Map();
  useEffect(()=>{
     let sum = 0;
     
 for (const property in values) {
    console.log(`${property}: ${values[property]}`);
    sum += parseInt(values[property]);
    myMap.set(property, { ...monthPremium,"cover_amount":property, "members":values[property] });

  }
console.log(myMap);

setHead(sum)
 console.log("sum",sum);
  },[values])
 

  console.log(values)
  return(
    <div className="tab-pane fade show active">
        <table className="table table-bordered">
            <thead>
                <tr>
                <th><i className="rma rma-umbrella"></i> Cover Amount</th>
                {premiumOption.map((val,i)=>{
                    return <th key={i}>R {val}.00</th>
                })}
                
            
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th id="memberOnlyCount"><i className="rma rma-user"></i> <span className="member-count">{head}</span> Members</th>
                    {premiumOption.map((val,i)=>{
                     
                    return   <td key={i}><input type="text" name={val} className="form-control member mc" data-id="mo_u64_1" onChange={handleChange} /></td>
                    })}
            
                </tr>
                <tr>
                    <th><i className="rma rma-sum"></i> Premium / Month</th>
                    {premiumOption.map((val,i)=>{
                        console.log("valllll", val)
                   return <td key={i}>R <span id="mo_u64_1_pr">{monthPremium ? monthPremium.premium_month * val :  null}</span></td>
                    })}
                   
                </tr>
                <tr>
                    <th><i className="rma rma-premium-1"></i> Total Premium / Month</th>
                    {premiumOption.map((val,i)=>{
                        
                   return <td key={i}>R <span id="mo_u64_1_tpr" className="mo_u64_tpr">{  values && monthPremium ? (monthPremium.premium_month * val) * parseInt(values[val]):0}.00</span></td>
                    })}
                    
                </tr>
            </tbody>
        </table>
    </div>
  );
};
