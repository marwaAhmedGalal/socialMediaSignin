import axios from "axios";

// get data by getServerSideProps
const url = "https://c7de-156-218-126-180.ngrok-free.app";

const defaultOptions = {
  baseURL: `${url}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
};
// Create instance
const axios_common = axios.create(defaultOptions);

export default axios_common;