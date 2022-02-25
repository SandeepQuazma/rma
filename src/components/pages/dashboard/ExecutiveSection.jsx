
import React, { useEffect } from 'react';
import { Card } from '@material-ui/core'
import ObjectExecutiveCol from './ObjectExecutiveCol.jsx';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useDispatch, useSelector } from 'react-redux';
import { getListTopExecutives } from "../../../features/dashboard/slices/dashboardInfo"

import Broker from '../../assets/img/broker.png';

export default function ExecutiveSection({ setdate }) {

    const dispatch = useDispatch();

    useEffect(() => {
        // setLoading(true);
        
    }, []);
    const { listTopExecutives } = useSelector((state) => state.dashboardInfo);
    

    return (
        <>
                { listTopExecutives.data?.data.map((data,i)=>{

                    return (

                        <div className="d-flex align-items-start executives-listing " key={i}>
                        <div className="img-wrapper">
                            <img src={Broker} alt="top broker" />
                        </div>
                        <div className="executive-info ml-3 ms-3">
                            <span className="d-block executive-name">{data.user.fname} {data.user.lname}</span>
                            <div className="d-flex justify-content-between mb-1">
                                <div className="quote-count">
                                    <FilterNoneIcon /> {data.total_quotes}
                                </div>
                                <div className="quote-value">
                                    <ArrowDropUpIcon className="text-success" /> 5 %
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="quote-count">
                                    <AttachMoneyIcon /> R {data.total_revenue}
                                </div>
                                <div className="quote-value">
                                    <ArrowDropUpIcon className="text-success" /> 7 %
                                </div>
                            </div>
                        </div>
                    </div> 

                    )
                })}


           
        </>
    )
}
