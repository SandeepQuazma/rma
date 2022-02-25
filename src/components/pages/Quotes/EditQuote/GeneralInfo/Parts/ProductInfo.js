import React from 'react';
import {useSelector} from 'react-redux';

export default function ProductInfo ({value,handleChange,productList}){
    console.log('product====',productList)
  return (
      <>
        <h6 className="mb-3">Product Information</h6>
        <div className="card has-box-shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label htmlFor="">Product</label>
                        <select className="form-control selectpicker changer" defaultValue={"Select"} value={value.product} name='product'    onChange={handleChange}>
                            <option value="" >Select</option>
                            {productList?productList?.data.map((val,i)=>{
                              return  <option key={i} value={val.id} >{val.product_name}</option>
                            }):null}
                            
                        </select>
                    </div>
                    <div className="col-md-4 form-group mb-0">
                        <label htmlFor="commision">Commision</label>
                        <input type="text" className="form-control" id="commision" name='commision' value={value.commision} onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
};
