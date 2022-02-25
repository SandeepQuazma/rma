import React, { useState, useEffect, useCallback }  from 'react';

import { useDispatch, useSelector } from "react-redux";
import EventBus from './features/common/eventBus';
// import { useNavigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import styles from './App.scss';
import Menu from './components/includes/Menu';
import Roles from './components/pages/roles/Roles.jsx';
import RolesAccess from './components/pages/roles/RolesAccess.jsx';
import AddRoles from './components/pages/roles/AddRoles.jsx';
import Action from "./components/pages/actions/Action.jsx";
import AddActions from './components/pages/actions/AddActions.jsx';
import EditActions from './components/pages/actions/EditActions.jsx';
import Products from "./components/pages/products/Products.jsx";
import EditProducts from './components/pages/products/EditProducts.jsx';
import AddProducts from './components/pages/products/AddProducts.jsx';
import ProductOptions from "./components/pages/products/ProductOptions.jsx";
import EditProductOptions from './components/pages/products/EditProductOptions.jsx';
import AddProductOptions from './components/pages/products/AddProductOptions.jsx';
import RangeTables from "./components/pages/range-tables/RangeTables.jsx";
import AddRangeTables from './components/pages/range-tables/AddRangeTables.jsx';
import EditRangeTables from './components/pages/range-tables/EditRangeTables.jsx';
import SchemeSettings from "./components/pages/scheme-settings/SchemeSettings.jsx";
import UpdateProfile from "./components/pages/UpdateProfile.jsx";
import ChangePassword from "./components/pages/ChangePassword.jsx";
import Users from "./components/pages/users/Users.jsx";
import EditUsers from './components/pages/users/EditUsers.jsx';
import AddUsers from './components/pages/users/AddUsers.jsx';
import BrokerFirm from './components/pages/users/BrokerFirm.jsx';
import AddBrokerFirm from './components/pages/users/AddBrokerFirm.jsx';
import EditBrokerFirm from './components/pages/users/EditBrokerFirm.jsx';
import Login from './components/pages/login/Login.jsx';
import ForgotPassword from './components/pages/login/ForgotPassword.jsx';
import Dashboard from './components/pages/dashboard/Dashboard.jsx';

import QuotesList from './components/pages/Quotes/QuotesList';
import ViewQuote from './components/pages/Quotes/ViewQuote/ViewQuote';
import EditQuote from './components/pages/Quotes/EditQuote/EditQuote';
import { logout } from './features/login/slices/auth';


const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);


  const handleignout = ()=>{
   
  }

  return (
    <Router>
      <div className="App">
          {/* <ul>
            <Link to="/roles">Roles</Link>
            <Link to="/">Home</Link>
          </ul> */}
         {currentUser?<Menu handleignout={logOut}  />:null} 
          <Routes>
            {/* <Route path="/"  />
            <Route path="/roles" element={<Roles />} /> */}
            {/* Login route */}
            <Route  path='/' element={<Login/>}/>
            <Route  path='/forgot-password' element={<ForgotPassword/>}/>
              {/* Roles Routes */}
              <Route  path='/roles' element={< Roles />}/>
              <Route  path='/role-access' element={< RolesAccess />}/>
              <Route  path='/add-role' element={< AddRoles />}/>
              {/* Action Routes */}
              <Route  path='/action' element={< Action />}/>
              <Route  path='/edit-action' element={< EditActions />}/>
              <Route  path='/add-actions' element={< AddActions />}/>
              {/* Products Route */}
              <Route  path='/products' element={< Products />}/>
              <Route  path='/edit-products' element={< EditProducts />}/>
              <Route  path='/add-products' element={< AddProducts />}/>
              <Route  path='/product-options' element={< ProductOptions />}/>
              <Route  path='/add-product-options' element={< AddProductOptions />}/>
              <Route  path='/edit-product-options' element={< EditProductOptions />}/>
              {/* Users Routes */}
              <Route  path='/users' element={< Users />}/>
              <Route  path='/edit-users' element={< EditUsers />}/>
              <Route  path='/add-users' element={< AddUsers />}/>
              {/* Broker Firm Routes */}
              <Route  path='/broker-firm' element={< BrokerFirm />}/>
              <Route  path='/edit-broker-firm' element={< AddBrokerFirm />}/>
              <Route  path='/add-broker-firm' element={< EditBrokerFirm />}/>

              {/* Range Tables Routes*/}
              <Route  path='/range-tables' element={< RangeTables />}/>
              <Route  path='/add-range-tables' element={< AddRangeTables />}/>
              <Route  path='/edit-range-tables' element={< EditRangeTables />}/>

              <Route  path='/scheme-settings' element={< SchemeSettings />}/>
              <Route  path='/dashboard' element={<Dashboard/>}/>
              <Route  path='/change-password' element={< ChangePassword />}/>
              <Route  path='/update-profile' element={< UpdateProfile />}/>

              <Route  path='/quotes' element={<QuotesList />}/>
             
              <Route  path='/view-quote' element={<ViewQuote />}/>
              <Route  path='/edit-quote' element={<EditQuote />}/>
            
          </Routes>
        </div>
    </Router>

      
  );
}

export default App


