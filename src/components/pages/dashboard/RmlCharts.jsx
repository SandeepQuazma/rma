import React, { PureComponent,useEffect,Fragment} from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import MyResponsiveBar from "./resBar.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { getCountGraph} from "../../../features/dashboard/slices/dashboardInfo"



const RmlCharts = ()=> {

  
    
  useEffect(() => {
     
     
  }, []);
  const { CountGraph,valueGraph  } = useSelector((state) => state.dashboardInfo);
  // const { } = useSelector((state) => state.dashboardInfo);
  
    return (
      
        <Row className="charts-row">
          {console.log('@@@@@@@@@@@')}
          
            <MyResponsiveBar graphData = {CountGraph.data} />
            <MyResponsiveBar graphData = {valueGraph.data} />
           
        </Row>
        
      
    );
  }

export default RmlCharts;
