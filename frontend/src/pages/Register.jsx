import { useState } from "react";
import PublicApi from "../services/PublicApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await PublicApi.post("accounts/register/", form);
            navigate("/login");
            console.log(response.data)
        } catch (err) {
            setError("Registration failed. Try again.");
        }
    };

    return (
        <div className="auth-container">
            <h1>Register</h1>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />

                <input
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}
