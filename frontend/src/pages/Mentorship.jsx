import { useEffect, useState } from "react";
import api from "../services/api";
import "./mentorship.css";
import mentorshipImage from "../assets/mentorship.jpg";

export default function Mentorship() {
    const [mentors, setMentors] = useState([]);
    const [focusArea, setFocusArea] = useState("");
    const [selectedMentor, setSelectedMentor] = useState(null);

    useEffect(() => {
        api.get("mentorship/mentors/")
            .then(res => setMentors(res.data))
            .catch(err => console.error(err));
    }, []);

    const requestMentorship = async () => {
        if (!selectedMentor || !focusArea) return;

        await api.post("mentorship/requests/", {
            mentor: selectedMentor,
            focus_area: focusArea,
        });

        alert("Mentorship request sent!");
        setFocusArea("");
        setSelectedMentor(null);
    };

    return (
        <div className="mentorship-page">
            <h1 className="mentorship-title">Mentorship</h1>
            <img
                src={mentorshipImage}
                alt="Mentorship and engineering guidance"
                className="mentorship-hero-image"
            />
            <div className="mentor-grid">
                {mentors.map(m => (
                    <div
                        key={m.id}
                        className={`mentor-card ${selectedMentor === m.user ? "selected" : ""
                            }`}
                        onClick={() => setSelectedMentor(m.user)}
                    >
                        <h3>{m.user_email}</h3>
                        <p>{m.expertise}</p>
                    </div>
                ))}
            </div>

            <div className="mentorship-form">
                <h3>Request Mentorship</h3>
                <input
                    placeholder="Focus area (e.g Aspen, Career guidance)"
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                />
                <button onClick={requestMentorship}>
                    Send Request
                </button>
            </div>
        </div>
    );
}
