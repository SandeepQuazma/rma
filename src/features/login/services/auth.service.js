import axios from "axios";
const API_URL = "https://rmlqmsdev.esoft.co.za/api/";
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = (username, password) => {
  console.log(username,password)
  return axios
    .post(API_URL + "login",{email: username},{headers: {
      
      password,
    }})
    .then((response) => {
      console.log("zzzzzzzzzzzzzzzzzz",response);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }).catch((e)=>{
      console.log("Network response*********:",e)
    });
};
const logout = () => {
  localStorage.removeItem("user");
};




const authService = {
  register,
  login,
  logout,
};
export default authService;













































































































































































































































