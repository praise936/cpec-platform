import { useEffect, useState } from "react";
import api from "../services/api";
import "./certificates.css";

export default function Certificates() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        api.get("certificates/")
            .then(res => setCertificates(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="certificates-page">
            <h1 className="certificates-title">My Certificates</h1>

            <div className="certificates-list">
                {certificates.map(cert => (
                    <div key={cert.id} className="certificate-card">
                        <h3>{cert.title}</h3>
                        <a href={cert.pdf} target="_blank" rel="noreferrer">
                            Download PDF
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
