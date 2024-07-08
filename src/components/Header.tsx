import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const location = useLocation();
  const { iconColor, buttonColor, backgroundColor } = useTheme();

  return (
    <header
      className="container header-container py-4"
      style={{ backgroundColor }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          {location.pathname === "/" ? (
            <>
              <h2 className="cart-question">Want to create a similar card?</h2>
              <Link
                to={"/user"}
                className="btn btn-primary"
                style={{ backgroundColor: buttonColor }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="me-2"
                  color={iconColor}
                />{" "}
                Fill out the Form
              </Link>
            </>
          ) : (
            <>
              <p>
                <Link
                  to={"/"}
                  className="btn btn-primary"
                  style={{ backgroundColor: buttonColor }}
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    className="me-2"
                    color={iconColor}
                  />{" "}
                  Return Home
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
