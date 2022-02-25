import React from 'react';

export default function Filter(){
  return (
    // style="display: none;" hidden initial to be do later
    <div className="card mb-3 filter-card" >
        <div className="card-body">
        <form>
            <div className="row flex-fill">
            <div className="col-3">
                <div className="form-group">
                    <select className="selectpicker form-control" title="Date Range" data-width="100%">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Custom Date range</option>
                    </select>
                </div>
            </div>
            <div className="col-3">
                <div className="form-group">
                    <input type="text" placeholder="Company Name" className="form-control" />
                </div>
            </div>
            <div className="col-3">
                <div className="form-group">
                    <input type="text" placeholder="Contact Person" className="form-control" />
                </div>
            </div>
            <div className="col-1">
                <button type="submit" className="btn-primary btn">Go</button>
            </div>
            </div>
        </form>
        </div>
    </div>
  );
};
