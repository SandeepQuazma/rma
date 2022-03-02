import React, { useState ,useEffect} from 'react';
import Info from './Parts/Info';
import ProductInfo from './Parts/ProductInfo';
import SetCoverPremium from './Parts/SetCoverPremium';
import { getProductList,getproductDetail } from '../../../../../features/quotes/slices/QuotesInfo';
import {useDispatch,useSelector} from 'react-redux';
const initialValue ={
  company_name:'',
  contact_person:'',
  email:'',
  phone:'',
  address:'',
  state_id:'',
  city_id:'',
  country_code:'',
  zipcode:'',
  cover_amount1:'',
  cover_amount2:'', cover_amount3:'', cover_amount4:'', cover_amount5:'', cover_amount6:'',
  product_id:'',commission:'',
}
export default function GeneralInfo({ nextStep ,getAgeBand}) {
 
  const [values,setValues]=useState(initialValue);
  const dispatch = useDispatch();
  function handleChange(e) {
    const {name,value}=e.target;
    setValues({...values,[name]:value});
    
  }
 

  useEffect(() => {
    // setLoading(true);
    dispatch(getProductList()).unwrap()
    .then((res) => {
     // setLoading(false)
     // console.log(res)
    })
    .catch((e) => {
      console.log(e);
      // setLoading(false);
    });
window.localStorage.removeItem("premiumInputs");
    
  }, []);
  const {productList}  = useSelector((state) => state.quotesInfo);
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(values)
    //console.log(e.target)
    const id = parseInt(values.product_id)
    dispatch(getproductDetail(id)).unwrap()
    .then((res) => {
     // setLoading(false)
     // console.log(res)
    })
    .catch((e) => {
      console.log(e);
      // setLoading(false);
    });
    const band = productList.data.filter((val, i)=>{
return val.id == values.product_id
    })
   
   
    getAgeBand(band?.[0].product_age_band,values)
    nextStep();
  }

  return (
    <div className="step-1">
      <form onSubmit={submitFormData} autoComplete="off">
        <Info values ={values} handleChange={handleChange}/>
        <SetCoverPremium value ={values} handleChange={handleChange} />
        <ProductInfo value ={values} handleChange={handleChange} productList={productList} />
        <div className="form-action text-end">
            <button type="submit" className="btn btn-primary show-step2">Proceed <i className="mdi mdi-arrow-right"></i></button>
        </div>
      </form>
    </div>
  );
};
