import { useEffect, useState } from "react";
import api from "../services/api";

export default function Resources() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        api.get("resources/")
            .then(res => setResources(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Resources</h1>
            {resources.map(r => (
                <div key={r.id}>
                    <h3>{r.title}</h3>
                    {r.file && <a href={r.file} target="_blank">Download</a>}
                    {r.url && <a href={r.url} target="_blank">Visit</a>}
                </div>
            ))}
        </div>
    );
}
