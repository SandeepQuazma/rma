import React, { Component,useEffect ,useState} from 'react';
import { Card, Container } from 'react-bootstrap'
import QuotesSections from './QuotesSections.jsx';
import { Navigate } from 'react-router-dom';
import ExecutiveSection from './ExecutiveSection.jsx';
import RmlCharts from './RmlCharts.jsx';
import {useDispatch,useSelector} from 'react-redux';
import Charts from './NivoChart.jsx';
import axios from 'axios';
import Preloader from '../preloader.jsx';
import FilterDashboard from './Filter.jsx';
import {getRecentQuoteList,getListTopExecutives,getCountGraph, getValueGraph} from "../../../features/dashboard/slices/dashboardInfo"


const Dashboard = ()=>{
  const [quotesCount,setQuotesCount] = useState('');
  const [chartData,setChartData] = useState([]);
  const [filterDate,setFilterDate] =useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const datez  = new Date();
  const date  = new Date();
  const secondDate=date.setDate(date.getDate() - 29) 
 let setdate = { from_d:filterDate?filterDate.from_date : datez.toISOString(),
                 to_d : filterDate?filterDate.to_date : new Date(secondDate).toISOString(),
                }
                

  const filterData =(date1,date2)=>{
    console.log("oooooooooo",date1.length,date2);
    if(date1 && date2){
      setFilterDate({from_date:date1.toISOString(),
      to_date:date2.toISOString()})

      dispatch(getListTopExecutives(date1,date2)).unwrap()
      .then((res) => {
        console.log("getListTopExecutives : ",res.data.data)
      })
      .catch(() => {
        setLoading(false);
      });

    }
  }
 


  useEffect(() => {
    setLoading(true);
    dispatch(getRecentQuoteList()).unwrap()
    .then((res) => {
      setLoading(false)
      console.log(res.data.data)
    })
    .catch(() => {
      // setLoading(false);
    });
    dispatch(getListTopExecutives(setdate.from_d, setdate.to_d)).unwrap()
            .then((res) => {
                console.log("tooop", res.data)
              
            })
            .catch((e) => {
                console.log("tooop", e)
                //   setLoading(false);
            });
            dispatch(getCountGraph(setdate.from_d, setdate.to_d)).unwrap()
            .then((res) => {
                console.log("tooop", res.data.data)
                
            })
            .catch(() => {
                //   
            });
            dispatch(getValueGraph(setdate.from_d, setdate.to_d)).unwrap()
            .then((res) => {
                console.log("tooop", res.data.data)
                
            })
            .catch(() => {
                //   
            });
           


  }, []);

  const {recentQuoteList}  = useSelector((state) => state.dashboardInfo);

  
    const { user: currentUser } = useSelector((state) => state.auth);
    // console.log(currentUser.token);
    // if (!currentUser) {
    //   return <Navigate to="/" />;
    // } 

    // loading?<Preloader/>:

    
   return (<>
      {loading?<Preloader/>:
      <Container className="dashboard-page">
        
      <FilterDashboard filterData={filterData}/>
        <RmlCharts setdate={setdate}/>
       
        <div className="top-executives">
          <Card className="card-executives">
              <Card.Body>
                  <h5 className="mb-3">Top Executives</h5>
                  <div className="d-flex justify-content-between py-2 flex-wrap">
                    <ExecutiveSection setdate={setdate}/>
                  </div>
              </Card.Body>
          </Card>
        </div>
       
        <QuotesSections/>
        
      </Container>}

      </>
    )
    // if(loading){
    //   <Preloader/>
    // }
  
}

export default Dashboard