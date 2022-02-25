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
import AddIcon from '@mui/icons-material/Add';


const columns = [
    { field: 'id', headerName: 'ID', 
    headerClassName:'table-grid-col-rma',flex:'100px' },
    {
      field: 'products',
      headerName: 'Products',
      headerClassName:'table-grid-col-rma',
      flex:1,
    
    },
    {
      field: 'mortalityCategories',
      headerName: 'Mortality Categories',
      headerClassName:'table-grid-col-rma',
      flex:1,
      renderCell:(params)=>{
        return(
          <div><Badge bg={params.row.statusColor} className={params.row.statusClassName}>{params.row.mortalityCategories}</Badge></div>
        )
      },
      
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
          <div><Link to="/product-options"><AddIcon className="material-icon-size-rma"/></Link><Link to="/edit-products"><EditIcon className="material-icon-size-rma"/></Link>&nbsp;&nbsp;<DeleteOutlineIcon className="material-icon-size-rma"/></div>
        )
      },
      flex:1,
    },
  ];
  
  const rows = [
    {id:1,products:'Funeral', mortalityCategories: 'Show',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
   ];

  
export default function Products() {
  return (
    <section>
      <Filters/>
      <div className="roles-page-table table-grid-rma" style={{ width: '100%' }}>
        <DataGrid autoHeight pagination
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
