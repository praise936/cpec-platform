import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Login from "./pages/Login";
import Programs from "./pages/Programs/Programs";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Events from "./pages/Events/Events";
import Resources from "./Resources/Resources";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Mentorship from "./pages/Mentorship";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mentorship" element={<Mentorship />} />
      </Routes>
    </BrowserRouter>
  );
}
