import React from "react";
import "../Styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-10 col-md-10">
                    <h1 className="display-4 mb-4 about-heading">Hey there, I'm Yashas 👋</h1>
                    <p className="lead about-text">
                        I’m an aspiring architect with a deep appreciation for spatial storytelling, sustainable design, and human-centered architecture.
                    </p>
                    <p className="about-text">
                        This website is more than just a portfolio — it's a living archive of my design journey, creative process, and architectural explorations. From academic projects to personal experiments, every sketch and concept here reflects my evolving perspective as a designer.
                    </p>
                    <p className="about-text">
                        I believe that architecture is not just about buildings, but about creating experiences. My approach blends functionality, minimalism, and innovation to design environments that connect with people on both emotional and practical levels.
                    </p>
                    <p className="about-text">
                        I'm particularly passionate about sustainable architecture, urban regeneration, and experimenting with digital tools such as parametric design and 3D visualization. I enjoy sketching, model making, and learning from both history and emerging trends in global architecture.
                    </p>
                    <p className="about-text">
                        On this website, you can explore:
                        <ul className="text-start mt-3 mb-4">
                            <li><strong>🧱 Projects</strong> – Academic, conceptual, and collaborative designs.</li>
                            <li><strong>🖌️ Sketchbook</strong> – Raw creative ideas, visual notes, and explorations.</li>
                            <li><strong>📓 Blog</strong> – My thoughts on design, architecture trends, and more.</li>
                            <li><strong>📄 Resume & Contact</strong> – My background and how to get in touch.</li>
                        </ul>
                    </p>
                    <p className="about-text">
                        Thank you for taking the time to visit. I’m always open to collaboration, feedback, and new learning opportunities.
                    </p>
                    <p className="about-text fw-bold">
                        Let’s design something meaningful together!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
