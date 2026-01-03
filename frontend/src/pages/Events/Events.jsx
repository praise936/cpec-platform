import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        api.get("events/")
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Events</h1>
            {events.map(event => (
                <div key={event.id}>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <small>
                        {new Date(event.date).toLocaleString()} • {event.mode}
                    </small>
                </div>
            ))}
        </div>
    );
}
