import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateName,
  updateSurname,
  updateSocialNetwork,
  selectUser,
  UserInfo,
  updateRole,
  updatePicture,
} from "../state/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./profilePage.css";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "../components/Icon";
import {
  faCameraRetro,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(selectUser);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(e.target.value));
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSurname(e.target.value));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRole(e.target.value));
  };

  const handleSocialNetworkChange = (
    network: keyof UserInfo["socialNetworks"],
    link: string
  ) => {
    dispatch(updateSocialNetwork({ network, link }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/");
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          dispatch(updatePicture(reader.result));
        }
      };
    }
  };

  return (
    <div className="container profile-container">
      <div className="px-4 py-3">
        <h1 className="mb-4 text-center author">User Profile</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faUser} /> Name:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faUser} /> Surname:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.surname}
              onChange={handleSurnameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faUserTie} />
              Role:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.role}
              onChange={handleRoleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faCameraRetro} /> Profile Picture:
            </label>
            <input
              type="file"
              className="form-control profile-input"
              accept="image/*"
              onChange={handlePictureChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faInstagram} /> Instagram:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.socialNetworks.instagram}
              onChange={(e) =>
                handleSocialNetworkChange("instagram", e.target.value)
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faFacebook} /> Facebook:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.socialNetworks.facebook}
              onChange={(e) =>
                handleSocialNetworkChange("facebook", e.target.value)
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faTwitter} /> Twitter:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.socialNetworks.twitter}
              onChange={(e) =>
                handleSocialNetworkChange("twitter", e.target.value)
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Icon icon={faLinkedin} /> LinkedIn:
            </label>
            <input
              type="text"
              className="form-control profile-input"
              value={userInfo.socialNetworks.linkedin}
              onChange={(e) =>
                handleSocialNetworkChange("linkedin", e.target.value)
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
