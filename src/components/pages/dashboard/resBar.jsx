import React, { PureComponent,useEffect,useCallback} from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { Card, Row, Col } from 'react-bootstrap';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { pink } from '@mui/material/colors';
import green from "@material-ui/core/colors/green";
import { useState } from 'react';


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

  



  const MyResponsiveBar = ({setdate,graphData}) => {
      const graphVal = []
      const dataArray=[]

    //   const [graphvalue,setGraphvalue]  = useState();

  const  graphvalue={
        graphTitle:graphData?.title,
        graphSubInfo1:graphData?.count || graphData?.value,
        graphSubInfo2:graphData?.count_up_or_down || graphData?.value_up_or_down,
        graph_Xtitle:graphData?.x_title,
        graph_Ytitle:graphData?.y_title,
        graph : graphData?.spots
         }
             graphvalue.graph?.map((val,i)=>{
                graphVal.push({Days:val[0],graphdata:val[1],graphdataColor: "hsl(181, 70%, 50%)"}) 
                console.log(val)
             })
console.log(graphvalue.graph?.length)


  

    console.log(graphData?.x_title);
  
  return (

<Col xs={12} md={6}>
                <Card>
                {console.log('llllolololo')}
                    <Card.Title>
                        <Row>
                            <Col xs={6}>
                                <h4>{graphvalue?.graphTitle}</h4>
                            </Col>
                            <Col xs={6} className="chart-info d-flex flex-row-reverse">
                                <Row className="p-0">
                                  <Col xs={12} className="d-flex flex-row-reverse">
                                    <p className="align-right chart-info-first"><span><AttachMoneyIcon/></span><span>{graphvalue.graphSubInfo1}</span></p>
                                  </Col>
                                  <Col xs={12} className="d-flex flex-row-reverse">
                                    <p className="text-right chart-info-second"><span>{graphvalue.graphSubInfo2>0?<ArrowDropUpIcon style={{ color: "green" }}/>:<ArrowDropDownIcon sx={{ color: pink[500] }}/>}</span><span><strong>{graphvalue.graphSubInfo2}</strong></span></p>
                                  </Col>
                                  </Row>
                              </Col>
                            
                        </Row>
                    </Card.Title>
                    <Card.Body>
                    <ResponsiveBar
          data={graphVal}
          keys={[
              'graphdata',
              
          ]}
          indexBy={graphvalue.graph_Xtitle}
          margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colorBy="indexValue"
          
          fill={[
              {
                  match: {
                      id: 'fries'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'sandwich'
                  },
                  id: 'lines'
              }
          ]}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'days',
              legendPosition: 'middle',
              legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: `${graphvalue.graph_Ytitle}`,
              legendPosition: 'middle',
              legendOffset: -90
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
         
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in days: "+e.indexValue}}
      />

                       
                            
                    </Card.Body>
                </Card>
            </Col>




     
  )}

  export default MyResponsiveBar;



