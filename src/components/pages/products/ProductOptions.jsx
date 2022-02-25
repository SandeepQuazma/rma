import React from 'react'
import { Table, Badge } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { param } from 'jquery';
import { Link } from 'react-router-dom';
import ProductOptionFilters from './snippets/ProductOptionFilters.jsx';
import AddIcon from '@mui/icons-material/Add';


const columns = [
    { field: 'id', headerName: 'ID', 
    headerClassName:'table-grid-col-rma',flex:'100px' },
    {
      field: 'label',
      headerName: 'Label',
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
          <div><Link to="/edit-product-options"><EditIcon className="material-icon-size-rma"/></Link>&nbsp;&nbsp;<DeleteOutlineIcon className="material-icon-size-rma"/></div>
        )
      },
      flex:1,
    },
  ];
  
  const rows = [
    {id:1, label:'Only Main Member',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:2, label:'Member, Spouse and up to 6 children',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:3, label:'Member, Spouse, up to 6 Children, up to 4 Parents and up to 4 other Members',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:4, label:'Only Main Member',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
   ];

  
export default function ProductOptions() {
  return (
    <section>
      <ProductOptionFilters/>
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
