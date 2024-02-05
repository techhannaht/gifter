import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        GiFTER
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/add" className="nav-link">
            New Post
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/userprofiles/add" className="nav-link">
            New User
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/userprofiles" className="nav-link">
            User List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;