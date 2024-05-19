import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
const Breadcrumbs = ({ name }) => {
  return (
    <div className="container">
      <ul className="breadcrumbs-list">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <li>
          <SlArrowRight size={12} />
        </li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
