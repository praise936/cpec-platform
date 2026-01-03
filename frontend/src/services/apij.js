import axios from "axios";

const apij = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

apij.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apij;
