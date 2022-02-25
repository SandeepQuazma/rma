import React, { useState ,useEffect} from 'react';
import Info from './Parts/Info';
import ProductInfo from './Parts/ProductInfo';
import SetCoverPremium from './Parts/SetCoverPremium';
import { getProductList,getproductDetail } from '../../../../../features/quotes/slices/QuotesInfo';
import {useDispatch,useSelector} from 'react-redux';
const initialValue ={
  companyName:'',
  contactPerson:'',
  email:'',
  phone:'',
  address:'',
  suburb:'',
  city:'',
  province:'',
  postal:'',
  option1:'',
  option2:'', option3:'', option4:'', option5:'', option6:'',
  product:'',commision:'',
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

    
  }, []);
  const {productList}  = useSelector((state) => state.quotesInfo);
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(values)
    //console.log(e.target)
    const id = parseInt(values.product)
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
return val.id == values.product
    })
    const {option1,
    option2, option3, option4, option5, option6}=values
   
    getAgeBand(band?.[0].product_age_band,[option1,
      option2, option3, option4, option5, option6])
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
