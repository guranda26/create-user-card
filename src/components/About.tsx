import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../state/user/userSlice";

const AboutMe: React.FC = () => {
  const userInfo = useSelector(selectUser);

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
          <h2 className="card-title">About Me</h2>
          <p className="card-text">
            Hi. I am{" "}
            <span>
              {userInfo.name} {userInfo.surname}
            </span>
            . I am a passionate {userInfo.role} with a solid background. To
            understand more about me, contact me anytime.
          </p>
          <p className="card-text">
            My work is driven by creativity, innovation, and a commitment to
            producing high-quality content that engages and inspires audiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
