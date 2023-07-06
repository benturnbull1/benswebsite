import PropTypes from "prop-types";
import React from "react";

const FormAtom = ({ type, placeholder }) => {
  return (
    <input
      className="form-control me-2"
      type={type}
      placeholder={placeholder}
      aria-label="Search"
    />
  );
};

FormAtom.defaultProps = {
  type: "search",
  placeholder: "Unknown",
};

FormAtom.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormAtom;
