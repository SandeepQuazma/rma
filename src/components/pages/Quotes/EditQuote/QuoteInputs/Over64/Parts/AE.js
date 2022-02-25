import React from 'react';

export default function AE(){
  function handleChange(event) {
    console.log(event.target.value);
  }
  return(
    <div className="tab-pane fade show active">
        <table className="table table-bordered">
            <thead>
                <tr>
                <th><i className="rma rma-umbrella"></i> Cover Amount</th>
                <th>R 5000.00</th>
                <th>R 10,000.00</th>
                <th>R 15,000.00</th>
                <th>R 20,000.00</th>
                <th>R 22,000.00</th>
                <th>R 30,000.00</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><i className="rma rma-user"></i> <span className="member-count">12</span> Members</th>
                    <td><input type="text" value="3" className="form-control member5000" onChange={handleChange} /></td>
                    <td><input type="text" value="1" className="form-control member10000" onChange={handleChange} /></td>
                    <td><input type="text" value="3" className="form-control member15000" onChange={handleChange} /></td>
                    <td><input type="text" value="1" className="form-control member20000" onChange={handleChange} /></td>
                    <td><input type="text" value="1" className="form-control member22000" onChange={handleChange} /></td>
                    <td><input type="text" value="3" className="form-control member22000" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th><i className="rma rma-sum"></i> Premium / Month</th>
                    <td>R <span>110.60</span></td>
                    <td>R <span>221.38</span></td>
                    <td>R <span>331.10</span></td>
                    <td>R <span>441.93</span></td>
                    <td>R <span>486.22</span></td>
                    <td>R <span>663.03</span></td>
                </tr>
                <tr>
                    <th><i className="rma rma-premium-1"></i> Total Premium / Month</th>
                    <td>R <span>331.08</span></td>
                    <td>R <span>221.38</span></td>
                    <td>R <span>993.3</span></td>
                    <td>R <span>441.93</span></td>
                    <td>R <span>486.22</span></td>
                    <td>R <span>1989.09</span></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};
