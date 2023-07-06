import React from "react";
import FormAtom from "../Atoms/FormAtom";
import ButtonAtom from "../Atoms/ButtonAtom";

const SearchMolecule = () => {
  return (
    <form className="d-flex">
      <FormAtom type="search" placeholder="Search" />
      <ButtonAtom type="search" buttonText="Search" />
    </form>
  );
};

export default SearchMolecule;
