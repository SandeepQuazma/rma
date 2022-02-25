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
      field: 'roleType',
      headerName: 'Role Type',
      headerClassName:'table-grid-col-rma',
      flex:1,
    
    },
    {
      field: 'role',
      headerName: 'Role',
      headerClassName:'table-grid-col-rma',
      flex:1,
      
    },
    {
        field: 'brokerFirm',
        headerName: 'Broker Firm',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
    },
    {
        field: 'firstName',
        headerName: 'First Name',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
      },
      {
        field: 'contactEmail',
        headerName: 'Contact Email',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
      },
      {
        field: 'phone',
        headerName: 'Phone',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
      },
      {
        field: 'lastLogin',
        headerName: 'Last Login',
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
          <div><Link to="/edit-users"><EditIcon className="material-icon-size-rma"/></Link>&nbsp;&nbsp;<DeleteOutlineIcon className="material-icon-size-rma"/></div>
        )
      },
      flex:1,
    },
  ];
  
  const rows = [
    {id:1,roleType:'Internal', role: 'Quote Admin', brokerFirm: '-', firstName:'Philip', lastName: 'Houston', contactEmail:'rhyxue158rk@yahoo.com', phone:'082 999 9945', lastLogin: '08-11-2021 at 14:00', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:2,roleType:'Internal', role: 'Manager', brokerFirm: '-', firstName:'Rebecca', lastName: 'Ramirez', contactEmail:'ts0knsm66a9@yahoo.com', phone:'084 599 2835	', lastLogin: '08-11-2021 at 14:00', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:3,roleType:'Internal', role: 'OPS Manager', brokerFirm: '-', firstName:'Howard', lastName: 'Cain', contactEmail:'rhyxue158rk@yahoo.com', phone:'082 999 9945', lastLogin: '08-11-2021 at 14:00', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:4,roleType:'External', role: 'Broker Admin', brokerFirm: 'AvaTrade<br/>4220122221', firstName:'Edwards', lastName: 'Houston', contactEmail:'rhyxue158rk@yahoo.com', phone:'082 999 9945', lastLogin: '08-11-2021 at 14:00', status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
];

  
export default function Users() {
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
