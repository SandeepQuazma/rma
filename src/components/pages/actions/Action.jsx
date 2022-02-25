import React from 'react'
import { Table, Badge } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import style from  '../../assets/sass/pages/actions.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { param } from 'jquery';
import { Link } from 'react-router-dom';
import Filters from './snippets/Filters.jsx';


const columns = [
    { field: 'id', headerName: 'ID', 
    headerClassName:'table-grid-col-rma',flex:'100px' },
    {
      field: 'moduleName',
      headerName: 'Module Name',
      headerClassName:'table-grid-col-rma',
      flex:1,
    
    },
    {
      field: 'actionName',
      headerName: 'Action Name',
      headerClassName:'table-grid-col-rma',
      flex:1,
      
    },
    {
        field: 'actionShortName',
        headerName: 'Action Short Name',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
    },
    {
        field: 'description',
        headerName: 'Description',
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
          <div><Link to="/edit-action"><EditIcon className="material-icon-size-rma"/></Link>&nbsp;&nbsp;<DeleteOutlineIcon className="material-icon-size-rma"/></div>
        )
      },
      flex:1,
    },
  ];
  
  const rows = [
    {id:1,moduleName:'Master', actionName: 'Add Users', actionShortName: 'AddUsers', description:'-',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:2,moduleName:'Brokers', actionName: 'Send Quote', actionShortName: 'SndQT', description:'-',status:'inactive',actions:'', statusColor:'warning', statusClassName:'inactive-status'},
    {id:3,moduleName:'Quote Management', actionName: 'Review Quote', actionShortName: 'RevQT', description:'-',status:'deactive',actions:'', statusColor:'danger', statusClassName:'deactive-status'},
    {id:4,moduleName:'Report', actionName: 'Download Report', actionShortName: 'DwnReport', description:'-',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
];

  
export default function Action() {
  return (
    <section>
      <Filters/>
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
