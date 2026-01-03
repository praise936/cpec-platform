import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    
});

// Add access token to request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor to handle expired access token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refresh = localStorage.getItem("refresh");
                const res = await axios.post(
                    "http://localhost:8000/api/token/refresh/",
                    { refresh }
                );

                localStorage.setItem("access", res.data.access);
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;

                return api(originalRequest); // Retry original request
            } catch (err) {
                console.error("Refresh token failed:", err);
                alert("please logout and login again your session has expired")
            }
        }
        return Promise.reject(error);
    }
);

export default api;
