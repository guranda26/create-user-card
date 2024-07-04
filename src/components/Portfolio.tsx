import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="container mt-5">
      <div
        className="card mx-auto p-4"
        style={{
          maxWidth: "400px",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        }}
      >
        <div className="card-body">
          <h2 className="card-title">Portfolio</h2>
          <p className="card-text">
            Welcome to my portfolio! Here you'll find a selection of my work,
            showcasing my skills and creativity in various digital media
            projects.
          </p>
          <p className="card-text">
            From video production to graphic design and social media campaigns,
            I have worked on a diverse range of projects. Feel free to browse
            through and explore my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
