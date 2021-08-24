import axios from "axios";
const BASE_URL = process.env.VUE_APP_API_BASE;

const get = (url) => {
  const data = axios.get(`${BASE_URL}/${url}`);
  return data;
};

const getById = (url, id) => {
  const data = axios.get(`${BASE_URL}/${url}/${id}`);
  return data;
};

export default { get, getById };
