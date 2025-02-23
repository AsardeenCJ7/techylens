import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <a href="/home-dark">
          Home <i className="" />
        </a>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <a href="#">
          News <i className="fal fa-angle-down" />
        </a>
        <ul className="sub-menu">
          <li>
            <Link to="/news">News Page</Link>
          </li>
          <li>
            <Link to="/news/single-news">Single News</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navigation;
