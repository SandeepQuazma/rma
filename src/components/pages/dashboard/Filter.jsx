import React ,{useState}from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DatePicker from "react-datepicker"
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

function FilterDashboard({filterData}) {
    const [isActive, setActive] = useState(false);
    const [selected, setSelected] = useState("last30day");
    const ToggleClass = () => {
      setActive(!isActive); 
     };
    const [fromDate, setFormDate] = React.useState();
    const [toDate, setToDate] = React.useState();

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    const handleselect= (e)=>{
        setSelected(e.target.value);
    }
    const filterSubmit =(e)=>{
        e.preventDefault();
        filterData(fromDate,toDate);
    }
    return (
        <>
        <div className="d-flex justify-content-between align-items-center pb-3">
          <h1 className="page-title m-0">Dashboard</h1>
          <div className="btn-wrapper">
            <button type="button" className={isActive ? "active btn btn-primary-outline btn-sm" : "btn btn-primary-outline btn-sm"}  onClick={ToggleClass}>
            <FilterAltOutlinedIcon/>
            </button>
          </div>
      </div>
      {isActive?
        <div id="filter_actions" className="card mb-3 filter-card">
          <div className="card-body">
            <form onSubmit={filterSubmit}>
              <div className="row flex-fill">
                <div className="col-3">
                  <div className="form-group">
                    <select className="selectpicker form-control" value={selected} onChange={handleselect} title="Date Range" id="dateRange" data-width="100%">
                        <option value="last30day">Last 30 Days</option>
                        <option value="custom-date">Custom Date</option>
                    </select>
                  </div>
                </div>
                
                      { selected==="custom-date"?
                      (<>

                    <div className="col-md-3" id="customDateField" >
                  <div className="form-group">  
                  <label htmlFor="customDate" className="c-label  datepicker-wrap input-group">
                      <DatePicker
                     required
                      placeholderText='From Date'
                      selected={fromDate}
                      onChange={(date) => setFormDate(date)}
                      customInput={
                        <input type="text" name="customDate" value={fromDate} id="customDate" className="form-control " />
                       
                      }
                      >
                       
                      </DatePicker>
                 
        </label>
        </div>
                </div>
                
                <div className="col-md-3" id="customDateField" >
                  <div className="form-group">  
                  <label htmlFor="customDate" className="c-label  datepicker-wrap input-group">
                      <DatePicker
                      required
                        placeholderText='To Date'
                        selected={toDate}
                      onChange={(date) => setToDate(date)}
                      customInput={
                        <input type="text" placeholder='To Date' name="customDate"  className="form-control " />
                       
                      }
                      >
                       
                      </DatePicker>
                 
        </label>
        </div>
                </div>
                

                     </> )
                
        :null}
                  
                <div className="col-1">
                      <button type="submit" className="btn-primary btn btn-xs">Go</button>
                </div>
              </div>
            </form>
          </div>
      </div> : null}
        </>
      );
}

export default FilterDashboard;