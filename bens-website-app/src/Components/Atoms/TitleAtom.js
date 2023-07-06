import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const TitleAtom = ({ title }) => {
  return (
    <Link className="navbar-brand mx-2" to="/">
      {title}
    </Link>
  );
};

TitleAtom.defaultProps = {
  title: "Title",
};

TitleAtom.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleAtom;
