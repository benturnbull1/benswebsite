import React from "react";
import SearchMolecule from "../Molecules/SearchMolecule";
import NavbarLinksMolecule from "../Molecules/NavbarLinksMolecule";
import TitleAtom from "../Atoms/TitleAtom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <TitleAtom title="Bens Website" />
      <NavbarLinksMolecule />
      <SearchMolecule />
    </nav>
  );
};
export default Header;
