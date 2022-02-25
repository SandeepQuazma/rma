import React from 'react';

export default function AE() {
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
                    <th><i className="rma rma-user"></i> <span className="total-member">9</span> Members</th>
                    <td><input type="text" value="3" className="form-control" onChange={handleCange} /></td>
                    <td><input type="text" value="0" className="form-control" onChange={handleCange} /></td>
                    <td><input type="text" value="3" className="form-control" onChange={handleCange} /></td>
                    <td><input type="text" value="0" className="form-control" onChange={handleCange} /></td>
                    <td><input type="text" value="0" className="form-control" onChange={handleCange} /></td>
                    <td><input type="text" value="3" className="form-control" onChange={handleCange} /></td>
                </tr>
                <tr>
                    <th><i className="rma rma-sum"></i> Premium / Month</th>
                    <td>R <span>28.82</span></td>
                    <td>R <span>57.64</span></td>
                    <td>R <span>86.24</span></td>
                    <td>R <span>115.28</span></td>
                    <td>R <span>127.13</span></td>
                    <td>R <span>173.36</span></td>
                </tr>
                <tr>
                    <th><i className="rma rma-premium-1"></i> Total Premium / Month</th>
                    <td>R <span>86.46</span></td>
                    <td>R <span>0.00</span></td>
                    <td>R <span>258.72</span></td>
                    <td>R <span>0.00</span></td>
                    <td>R <span>0.00</span></td>
                    <td>R <span>520.08</span></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};
