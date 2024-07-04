import React from "react";

const Reviews: React.FC = () => {
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
          <h2 className="card-title">Reviews</h2>
          <p className="card-text">
            Client satisfaction is my top priority. Here are some reviews and
            testimonials from clients I've worked with over the years.
          </p>
          <p className="card-text">
            Their feedback highlights the quality of my work, my dedication to
            each project, and the positive impact of our collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
