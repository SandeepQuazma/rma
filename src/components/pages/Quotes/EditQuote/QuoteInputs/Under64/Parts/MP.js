import React from 'react';

export default function MP() {
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
                    <th><i className="rma rma-user"></i> <span className="total-member">60</span> Members</th>
                    <td><input type="text" value="10" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="23" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="10" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="10" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="4" className="form-control" onChange={handleChange} /></td>
                    <td><input type="text" value="3" className="form-control" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th><i className="rma rma-sum"></i> Per Premium / Month</th>
                    <td>R <span>65.00</span></td>
                    <td>R <span>130.00</span></td>
                    <td>R <span>195.00</span></td>
                    <td>R <span>259.00</span></td>
                    <td>R <span>284.00</span></td>
                    <td>R <span>387.00</span></td>
                </tr>
                <tr>
                    <th><i className="rma rma-premium-1"></i> Total Premium / Month</th>
                    <td>R <span>650.00</span></td>
                    <td>R <span>2990.00</span></td>
                    <td>R <span>1950.00</span></td>
                    <td>R <span>2590.00</span></td>
                    <td>R <span>1136.00</span></td>
                    <td>R <span>1161.00</span></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};
