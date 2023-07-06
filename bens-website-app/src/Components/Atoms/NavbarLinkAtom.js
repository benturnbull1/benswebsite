import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import React from "react";

const NavbarLinkAtom = ({ text, classIcon }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to="/">
        <i className={classIcon} aria-hidden="true"></i>
        {text}
      </NavLink>
    </li>
  );
};

NavbarLinkAtom.defaultProps = {
  text: "Text",
  classIcon: "fa-solid fa-xmark",
};

NavbarLinkAtom.propTypes = {
  text: PropTypes.string.isRequired,
  classIcon: PropTypes.string.isRequired,
};

export default NavbarLinkAtom;
