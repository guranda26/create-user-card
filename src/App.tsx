import React from "react";
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/Card";
import AboutMe from "./components/About";
import Portfolio from "./components/Portfolio";
import Websites from "./components/Websites";
import Reviews from "./components/Reviews";
import ProfilePage from "./pages/profilePage";
import Header from "./components/Header";
import ErrorPage from "./pages/errorPage";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="sidebar"></div>
        <div className="content">
          <Routes>
            <Route path="/" element={<UserCard />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/user" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
