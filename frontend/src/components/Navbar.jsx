import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <h2>CPEC</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/programs">Programs</Link>
                <Link to="/mentorship">Mentorship</Link>
                <Link to="/events">Events</Link>
                <Link to="/resources">Resources</Link>

                {user ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Join</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
