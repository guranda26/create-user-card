import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <h2>Page Not Found</h2>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
