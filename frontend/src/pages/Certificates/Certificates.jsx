import { useEffect, useState } from "react";
import api from "../services/api";

export default function Certificates({ user }) {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        api
            .get("/certificates/mine/")
            .then((res) => setCertificates(res.data))
            .catch(() => setError("Failed to load certificates"))
            .finally(() => setLoading(false));
    }, []);

    const downloadCertificate = async (id) => {
        const response = await api.get(`/certificates/mine/${id}/`, {
            responseType: "blob",
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `certificate_${id}.pdf`);
        document.body.appendChild(link);
        link.click();
    };

    if (loading) return <p className="spinner">Loading certificates...</p>;

    return (
        <div className="certificates-page">
            {error && <p className="error-message">{error}</p>}

            {certificates.length === 0 ? (
                <p className="empty-message">You have no certificates yet.</p>
            ) : (
                <div className="certificates-container">
                    {certificates.map((c) => (
                        <div key={c.id} className="certificate-card">
                            <h3>{c.title}</h3>
                            <button
                                className="btn-download-certificate"
                                onClick={() => downloadCertificate(c.id)}
                            >
                                Download PDF
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
