import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user.email}</p>
            <p>Role: {user.role}</p>

            {user.role === "admin" && (
                <p>You have admin access.</p>
            )}
        </div>
    );
}
