import axios from "axios";

const PublicApi = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export default PublicApi;
