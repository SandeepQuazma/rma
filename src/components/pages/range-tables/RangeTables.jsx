import React from 'react'
import { Table, Badge } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import style from  '../../assets/sass/pages/range-tables.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { param } from 'jquery';
import { Link } from 'react-router-dom';
import Filters from './snippets/Filters.jsx';


const columns = [
    { field: 'id', headerName: 'ID', 
    headerClassName:'table-grid-col-rma',flex:'100px' },
    {
      field: 'rangeName',
      headerName: 'Range Name',
      headerClassName:'table-grid-col-rma',  
      flex:1,
    
    },
    {
      field: 'category',
      headerName: 'Category',
      headerClassName:'table-grid-col-rma',
      flex:1,
      
    },
    {
        field: 'product',
        headerName: 'Product',
        headerClassName:'table-grid-col-rma',
        flex:1,
        
    },
    {
        field: 'lastUpdateOn',
        headerName: 'Last Update On',
        headerClassName:'table-grid-col-rma',
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
    {id:1,rangeName:'SA85-90-2021', category: 'SA85-90', product: 'Funeral', lastUpdateOn:'08-11-2021 at 14:00'},
    {id:2,rangeName:'SA85-90-2020', category: 'SA85-90', product: 'Funeral', lastUpdateOn:'08-11-2021 at 14:00'},
    {id:3,rangeName:'SA85-90-2019', category: 'SA85-90', product: 'Funeral', lastUpdateOn:'08-11-2021 at 14:00'},
    {id:4,rangeName:'SA85-90-2021(heavy)', category: 'SA85-90(heavy)', product: 'Funeral', lastUpdateOn:'08-11-2021 at 14:00'},
];

  
export default function RangeTables() {
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
