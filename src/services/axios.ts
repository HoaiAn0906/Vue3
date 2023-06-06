import axios from "axios";

const API = axios.create({
    baseURL: "http://demolaravelvue.test/api/",
    headers: { "Content-Type": "multipart/form-data" },
});

export default API;