import axios from "axios";

const apij = axios.create({
    baseURL: "http://localhost:8000/api/",
});

apij.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apij;
