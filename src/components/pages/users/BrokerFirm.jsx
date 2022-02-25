import React from 'react'
import { Table, Badge } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import style from  '../../assets/sass/pages/actions.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { param } from 'jquery';
import { Link } from 'react-router-dom';
import BrokerFilter from './snippets/BrokerFilter.jsx';


const columns = [
    { field: 'id', headerName: 'ID', 
    headerClassName:'table-grid-col-rma',flex:'100px' },
    {
      field: 'brokerFirmName',
      headerName: 'Broker Firm Name',
      headerClassName:'table-grid-col-rma',
      flex:1,
    
    },
    {
      field: 'vatNumber',
      headerName: 'VAT Number',
      headerClassName:'table-grid-col-rma',
      flex:1,
      
    },
    
    {
      field: 'status',
      headerName: 'Status',
      headerClassName:'table-grid-col-rma',
      renderCell:(params)=>{
        return(
          <div><Badge bg={params.row.statusColor} className={params.row.statusClassName}>{params.row.status}</Badge></div>
        )
      },
      flex:1,
    },
    {
      field: 'acions',
      headerName: 'Actions',
      headerClassName:'table-grid-col-rma',
      renderCell:(params)=>{
        return(
          <div><Link to="/edit-broker-firm"><EditIcon className="material-icon-size-rma"/></Link></div>
        )
      },
      flex:1,
    },
  ];
  
  const rows = [
    {id:1,brokerFirmName:'AvaTrade', vatNumber: '4220122221',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:2,brokerFirmName:'FOREX.com', vatNumber: '4220122221', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:3,brokerFirmName:'Moneta Markets', vatNumber: '4220122221', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:4,brokerFirmName:'Saxo Bank', vatNumber: '4220122221', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
];

  
export default function BrokerFirm() {
  return (
    <section>
      <BrokerFilter/>
      <div className="roles-page-table table-grid-rma" style={{ width: '100%' }}>
        <DataGrid autoHeight
        disableColumnSelector
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        
        disableSelectionOnClick
      />
      </div>
    </section>
  )
}
