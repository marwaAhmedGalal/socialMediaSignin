import axios from "axios";

// get data by getServerSideProps
const url = "http://192.168.90.164:8000";

const defaultOptions = {
  baseURL: `${url}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
};
// Create instance
const axios_common = axios.create(defaultOptions);

export default axios_common;
