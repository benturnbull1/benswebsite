import PropTypes from "prop-types";
import React from "react";

const ButtonAtom = ({ type, buttonText }) => {
  return (
    <button className="btn btn-outline-success" type={type}>
      {buttonText}
    </button>
  );
};

ButtonAtom.defaultProps = {
  type: "search",
  buttonText: "Button",
};

ButtonAtom.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonAtom;
