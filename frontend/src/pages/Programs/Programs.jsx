import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Programs() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        api.get("programs/")
            .then(res => setPrograms(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Programs</h1>
            {programs.map(program => (
                <div key={program.id}>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <small>{program.category} • {program.level}</small>
                </div>
            ))}
        </div>
    );
}
