import React,{useState,useEffect,} from 'react';
import { useSelector } from 'react-redux';

export default function MO({premiumOption,productDetails,handlePremiumData, tabInfo,head_Value}) {
    const {tabState}=useSelector((state)=> state.quotesInfo)
    console.log(tabState);
    console.log(productDetails);
    const [values,setValues] = useState({})
    const [head,setHead]=useState(0)
    const [premium,setPremium]=useState(0)

    const [inputs,setInputs] = useState({})
     console.log(" tabs.....",tabInfo)
    const [monthPremium]=productDetails?.premium_data.filter((val,i)=>{
return (tabState.band.id ==val.age_band_id && tabState.option.id== val.label_id)
    })
    console.log("primium per month",monthPremium)
    useEffect(()=>{
console.log('tabstate...',tabInfo)

setInputs({})
setValues({})

 },[tabState])
  function handleChange(e,i) {
    console.log(e.target.value);
    let newInputs = {...inputs};
newInputs[i] = e.target.value;
setInputs(newInputs)
    
    setValues({...values,[e.target.name] : e.target.value });
  }
  const myMap = new Map();
  useEffect(()=>{
     let sum = 0;
     
 for (const property in values) {
    console.log(`${property}: ${values[property]}`);
    sum += parseInt(values[property]);
    handlePremiumData({"age_band_id":monthPremium.age_band_id,"label_id":monthPremium.label_id,"cover_amount":property, "members":values[property] });
    head_Value(`${monthPremium.age_band_id}-${monthPremium.label_id}`,property,values[property] );
    myMap.set(`${monthPremium.age_band_id}-${monthPremium.label_id}-${property}`, {"age_band_id":monthPremium.age_band_id,"label_id":monthPremium.label_id,"cover_amount":property, "members":values[property] });

  }
console.log(myMap);

setHead(sum)

 console.log("sum",sum);
//  handlePremiumData({"age_band_id":monthPremium.age_band_id,"label_id":monthPremium.label_id,"cover_amount":property, "members":values[property] });
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
                         let headWithValue = JSON.parse(localStorage.getItem("premiumInputs") || "[]");
                         let headCount=0;
                         let totalPremium= 0;
                         headWithValue.forEach((data,i)=>{
                              if(data.tab ==`${monthPremium?.age_band_id}-${monthPremium?.label_id}` && data.amount == val){
                                  headCount +=data.head;
                                  totalPremium += data.amount;
                              }
                         })
                         inputs[i]=headCount;
                         console.log("inpooooo",inputs)
                     
                    return   <td key={i}><input type="text" name={val} value={Math.floor(inputs[i]) ||''} className="form-control member mc" data-id="mo_u64_1" onChange={(e) => {handleChange(e, i)}} /></td>
                    })}
            
                </tr>
                <tr>
                    <th><i className="rma rma-sum"></i> Premium / Month</th>
                    {premiumOption.map((val,i)=>{
                        console.log("valllll", val)
                            

                   return <td key={i}>R <span id="mo_u64_1_pr">{monthPremium ? (monthPremium.premium_month * val).toFixed(2) :  null}</span></td>
                    })}
                   
                </tr>
                <tr>
                    <th><i className="rma rma-premium-1"></i> Total Premium / Month</th>
                    {premiumOption.map((val,i)=>{
                        let month_premium =monthPremium? monthPremium?.premium_month * val:0;
                        let head = parseInt(values[val]);
                        let num = isNaN(head)
                   return <td key={i}>R <span id="mo_u64_1_tpr" className="mo_u64_tpr">{num !==true? (month_premium * head).toFixed(2):"00"} </span></td>
                    })}
                    
                </tr>
            </tbody>
        </table>
    </div>
  );
};
