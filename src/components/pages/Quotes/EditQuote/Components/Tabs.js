import React from 'react';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export default function Tabs({stepNum}) {
  return (
    <div className="subheader-menu">
        <ul>
            <li className={"menu-item menu-item1 show-genral-info " + (stepNum == 1 ? 'active' : 'prev')} >
                <a>
                    <LiveHelpOutlinedIcon sx={{ fontSize: 19 }}  /> 
                    <span>General Info</span>
                </a>
            </li>
            <li className={"menu-item menu-item2 show-step2 " + (stepNum == 2 ? 'active' : '') + (stepNum > 2 ? 'prev' : '')}>
                <a href="#">
                    <i className="rma rma-pencil"></i> 
                    <EditOutlinedIcon sx={{ fontSize: 19 }} /> 
                    <span>Quote Inputs</span>
                </a>
            </li>
            <li className={"menu-item menu-item3 show-preview " + (stepNum == 3 ? 'active' : '') + (stepNum > 3 ? 'prev' : '')}>
                <a href="#">
                    <SearchOutlinedIcon sx={{ fontSize: 19 }}/> 
                    <span>Preview</span>
                </a>
            </li>
            <li className={"menu-item thank-you-menu " + (stepNum == '4' ? 'active' : '')}>
                <a href="#">
                    <ThumbUpAltOutlinedIcon sx={{ fontSize: 19 }}/> 
                    <span>Done</span>
                </a>
            </li>
        </ul>
    </div>
  );
};
