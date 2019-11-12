import axios from "axios";
axios.defaults.baseURL = "https://account-budget-challenge.herokuapp.com";

axios.defaults.headers = {
  "Content-Type": "application/json",
  token: "LambdaRocks!"
};

export const axiosWithAuth = axios;
