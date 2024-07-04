import React from "react";

const Websites: React.FC = () => {
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
          <h2 className="card-title">Websites</h2>
          <p className="card-text">
            This is the website I have developed and contributed to. Each
            project involved a unique set of challenges and opportunities,
            allowing me to grow and enhance my skills.
          </p>
          <p className="card-text">
            Take a look at the websites below to see the range of my work, from
            personal blogs to professional business sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Websites;
