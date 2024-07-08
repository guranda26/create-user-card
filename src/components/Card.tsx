import React from "react";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { UserInfo, selectUser } from "../state/user/userSlice";
import profileImage from "../assets/images/user-image.jpeg";
import "./Card.css";
import Icon from "./Icon";

const UserCard: React.FC = () => {
  const userInfo = useSelector(selectUser);

  const handleSocialNetworkClick = (
    network: keyof UserInfo["socialNetworks"]
  ) => {
    const link = userInfo.socialNetworks[network] || socialMediaLinks[network]; // Use existing link or empty string
    window.open(link, "_blank");
  };

  const socialMediaLinks = {
    facebook: "https://facebook.com/yourusername",
    instagram: "https://facebook.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center user-card-bg">
      <div
        className="card user-card"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body text-center">
          <div className="profile-image mb-3">
            <div className="profile-img-container">
              <img
                src={userInfo.picture || profileImage}
                alt="Profile"
                className="rounded-circle img-thumbnail user-profile-img"
              />
            </div>
          </div>
          <div>
            <h1 className="author">
              {userInfo.name || "Name"} {userInfo.surname || "Surname"}
            </h1>
            <p className="author">{userInfo.role || "Job"}</p>
          </div>

          <div className="social-icons mb-3">
            <button
              onClick={() => handleSocialNetworkClick("instagram")}
              className="btn btn-lg m-1 btn-primary"
            >
              <Icon icon={faInstagram} />
            </button>
            <button
              onClick={() => handleSocialNetworkClick("facebook")}
              className="btn btn-primary btn-lg m-1"
            >
              <Icon icon={faFacebook} />
            </button>
            <button
              onClick={() => handleSocialNetworkClick("twitter")}
              className="btn btn-primary btn-lg m-1"
            >
              <Icon icon={faTwitter} />
            </button>
            <button
              onClick={() => handleSocialNetworkClick("linkedin")}
              className="btn btn-primary btn-lg m-1"
            >
              <Icon icon={faLinkedin} />
            </button>
          </div>

          <nav className="nav flex-column nav-buttons">
            <Link
              to="/about"
              className="btn btn-outline-primary btn-lg mb-2 buttons"
            >
              About Me
            </Link>
            <Link
              to="/portfolio"
              className="btn btn-outline-primary btn-lg mb-2"
            >
              Portfolio
            </Link>
            <Link
              to="/websites"
              className="btn btn-outline-primary btn-lg mb-2"
            >
              Websites
            </Link>
            <Link to="/reviews" className="btn btn-outline-primary btn-lg mb-2">
              Reviews
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
