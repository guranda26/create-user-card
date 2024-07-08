import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeSettings.css";

const ThemeSettings: React.FC = () => {
  const {
    iconColor,
    buttonColor,
    backgroundColor,
    backgroundImage,
    setIconColor,
    setButtonColor,
    setBackgroundColor,
    setBackgroundImage,
  } = useTheme();

  const [newIconColor, setNewIconColor] = useState(iconColor);
  const [newButtonColor, setNewButtonColor] = useState(buttonColor);
  const [newBackgroundColor, setNewBackgroundColor] = useState(backgroundColor);
  const [newBackgroundImage, setNewBackgroundImage] = useState(backgroundImage);

  const applyChanges = () => {
    setIconColor(newIconColor);
    setButtonColor(newButtonColor);
    setBackgroundColor(newBackgroundColor);
    setBackgroundImage(newBackgroundImage);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        paddingBottom: "1rem",
        backgroundColor: backgroundColor,
      }}
    >
      <h3 style={{ fontFamily: "Pacifico" }}>Theme Settings</h3>
      <div className="theme">
        <label>Background Color: </label>
        <input
          type="color"
          value={newBackgroundColor}
          onChange={(e) => setNewBackgroundColor(e.target.value)}
        />
      </div>
      <div className="theme">
        <label>Background Image URL: </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file"
        />
      </div>
      <div className="theme">
        <label>Button Color: </label>
        <input
          type="color"
          value={newButtonColor}
          onChange={(e) => setNewButtonColor(e.target.value)}
        />
      </div>
      <div className="theme">
        <label> Icon Color: </label>
        <input
          type="color"
          value={newIconColor}
          onChange={(e) => setNewIconColor(e.target.value)}
        />
      </div>
      <button
        onClick={applyChanges}
        style={{ backgroundColor: buttonColor, color: "#fff" }}
        className="btn btn-primary"
      >
        Apply Theme
      </button>
    </div>
  );
};

export default ThemeSettings;
