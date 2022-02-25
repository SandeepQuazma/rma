import React from 'react';

export default function MSU6C() {
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
                    <th><i className="rma rma-user"></i> <span id="memberCount2">85</span> Members</th>
                    <td><input type="text" value="10" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="10" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="6" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="30" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="19" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="10" className="form-control" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th><i className="rma rma-sum"></i> Premium / Month</th>
                    <td>R <span>28.00</span></td>
                    <td>R <span>56.00</span></td>
                    <td>R <span>85.00</span></td>
                    <td>R <span>112.00</span></td>
                    <td>R <span>124.00</span></td>
                    <td>R <span>169.0</span></td>
                </tr>
                <tr>
                    <th><i className="rma rma-premium-1"></i> Total Premium / Month</th>
                    <td>R <span id-="total">280.00</span></td>
                    <td>R <span>560.00</span></td>
                    <td>R <span>510.00</span></td>
                    <td>R <span>3360.00</span></td>
                    <td>R <span>2356.00</span></td>
                    <td>R <span>1690.00</span></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};
