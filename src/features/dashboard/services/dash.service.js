import axios from "axios";
import authHeader from "../../login/services/auth-header"
const API_URL = "https://rmlqmsdev.esoft.co.za/api/";

axios.interceptors.request.use(function (config) {
  const user = JSON.parse(localStorage.getItem('user'));
  config.headers.Authorization = user? `Bearer ${user.token}` :'';

  
  return config;
  
  });
const countGraph = (from_date,to_date) => {
  return axios.get(API_URL + "quotes/count-graph",null,{params: {
    from_date,
    to_date,
      }});
};
const valueGraph = (from_date,to_date) => {
  return axios.get(API_URL + "quotes/value-graph",null,{params: {
        from_date,
        to_date,
          }});
};
const listTopExecutives = (from_date,to_date) => {

    return axios.get(API_URL + "users/top-executives", {
        limit: 5,
        from_date,
        to_date
          },
       { headers:authHeader});

};
const recentQuoteList = () => {
    return axios.get(API_URL + "quotes",{params: {
    limit: "9",
    order:"desc",
      }});

};




const dashboardService = {
    countGraph,
    valueGraph,
    listTopExecutives,
    recentQuoteList
};
export default dashboardService;













































































































































































































































