import React, { Component } from 'react';
import { ReactDOM } from 'react';
import { Row, Col, Table, Badge, Form } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import style from  '../../assets/sass/pages/roles-table.scss';
import { DataGrid } from '@mui/x-data-grid';
import { param } from 'jquery';
import { Link } from 'react-router-dom';
import Filters from './snippets/Filters.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { components } from "react-select";

import { default as ReactSelect } from "react-select";
import AddRoles from './AddRoles.jsx';


const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const options = [
{ value: 'Quote Admin', label: 'Quote Admin' },
{ value: 'Manager', label: 'Manager' },
{ value: 'OPS Manager', label: 'OPS Manager' },
{ value: 'Broker Admin', label: 'Broker Admin' },
{ value: 'Broker Manager', label: 'Broker Manager' },
];


const columns = [
    { field: 'id', headerName: 'ID', 
    headerClassName:'table-grid-col-rma',flex:'100px' },
    {
      field: 'roleName',
      headerName: 'Role Name',
      headerClassName:'table-grid-col-rma',
      flex:1,
    
    },
    {
      field: 'roleType',
      headerName: 'Role Type',
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
          <div><Link to="/role-access"><SettingsIcon className="material-icon-size-rma"/></Link>&nbsp;&nbsp;<EditIcon className="material-icon-size-rma"/></div>
        )
      },
      flex:1,
    },
  ];
  
  const rows = [
    {id:1,roleName:'Quote Admin', roleType:'Internal',status:'active',actions:'', statusColor:'success', statusClassName:'active-status'},
    {id:2,roleName:'Manager', roleType:'Internal',status:'inactive',actions:'', statusColor:'warning', statusClassName:'inactive-status'},
    {id:3,roleName:'OPS Manager', roleType:'Internal',status:'deactive',actions:'', statusColor:'danger', statusClassName:'deactive-status'},
    {id:4,roleName:'Broker Admin', roleType:'Internal',status:'active',actions:'', statusColor:'warning', statusClassName:'inactive-status'},
  ];

  
  export default class Roles extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isMenuOpen: false
      }
      this.toggleMenu = this.toggleMenu.bind(this);
    }
  
    toggleMenu() {
      this.setState({isMenuOpen: !this.state.isMenuOpen})
    }

    render(){
      return (
        <section>
          <Filters onMenuToggle={this.toggleMenu}/>
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
         
    
          <AddRoles isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}/>
          
        </section>
      )
    }

  // const [isOpen, setIsopen] = useState(false);

  //   const ToggleSidebar = () => {
  //       isOpen === true ? setIsopen(false) : setIsopen(true);
  //   }
  
}
