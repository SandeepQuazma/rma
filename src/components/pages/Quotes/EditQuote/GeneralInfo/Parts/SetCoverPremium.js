import React from 'react';

export default function SetCoverPremium ({value,handleChange}) {
  return (
      <>
        <h6 className="mb-3">Set Cover Amount</h6>
        <div className="card has-box-shadow">
            <div className="card-body">
            <div className="row">
                <div className="col-md-4 form-group">
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" required className="form-control" id="option1"  value={value.option1} name='cover_amount1'  onChange={handleChange} />
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" id="option2" value={value.option2} name='cover_amount2'  onChange={handleChange} />
                </div>
                <div className="col-md-4 form-group mb-0">
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" id="option3" value={value.option3} name='cover_amount3'  onChange={handleChange} />
                </div>
                <div className="col-md-4 form-group mb-0">
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" id="option4" value={value.option4} name='cover_amount4'  onChange={handleChange} />
                </div>
                <div className="col-md-4 form-group mb-0">
                    <label htmlFor="option5">Option 5</label>
                    <input type="text" className="form-control" id="option5" value={value.option5} name='cover_amount5'  onChange={handleChange} />
                </div>
                <div className="col-md-4 form-group mb-0">
                    <label htmlFor="option6">Option 6</label>
                    <input type="text" className="form-control" id="option6" value={value.option6} name='cover_amount6'  onChange={handleChange} />
                </div>
            </div>
            </div>
        </div>
      </>
  );
};
