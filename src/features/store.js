import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./login/slices/auth";
import messageReducer from "./login/slices/massege";
import dashboardInfo from "./dashboard/slices/dashboardInfo"
import quotesInfo from "./quotes/slices/QuotesInfo"

const reducer = {
  auth: authReducer,
  dashboardInfo,
  quotesInfo, 
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;