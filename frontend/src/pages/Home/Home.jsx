import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-engineers.jpg";
import './home.css'
export default function Home() {
    return (
        <div className="home-page">
            {/* hero */}
            {/*/mentorship HERO SECTION */}
            <section className="home-hero">
                <div className="home-hero-content">
                    <h1 className="home-hero-title">
                        ChemProcess Engineers Connect
                    </h1>

                    <p className="home-hero-subtitle">
                        A community for Chemical and Process Engineering students to learn,
                        grow, and connect beyond the classroom.
                    </p>

                    <div className="home-hero-actions">
                        <Link to="/register" className="btn btn-primary">
                            Join CPEC
                        </Link>
                        <Link to="/programs" className="btn btn-secondary">
                            Explore Programs
                        </Link>
                    </div>
                </div>

                <div className="home-hero-image-wrapper">
                    <img
                        src={heroImage}
                        alt="Chemical and process engineering students collaborating"
                        className="home-hero-image"
                    />
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="home-features">
                <div className="home-feature-card">
                    <h3 className="home-feature-title">Software & Skills</h3>
                    <p className="home-feature-text">
                        Learn Aspen, MATLAB, and industry-relevant tools together.
                    </p>
                </div>

                <div className="home-feature-card">
                    <h3 className="home-feature-title">Mentorship</h3>
                    <p className="home-feature-text">
                        Get guidance from seniors, alumni, and professionals.
                    </p>
                </div>

                <div className="home-feature-card">
                    <h3 className="home-feature-title">Career Growth</h3>
                    <p className="home-feature-text">
                        Internships, projects, and real-world engineering exposure.
                    </p>
                </div>
            </section>

        </div>
    );
}
