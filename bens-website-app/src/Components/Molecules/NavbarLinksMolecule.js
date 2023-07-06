import NavbarLinkAtom from "../Atoms/NavbarLinkAtom";
import React from "react";

const NavbarLinksMolecule = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavbarLinkAtom text="Home" classIcon="fa fa-home mx-1" />
      <NavbarLinkAtom text="Register" classIcon="fa fa-plus mx-1" />
      <NavbarLinkAtom text="About Us" classIcon="fa fa-question mx-1" />
    </ul>
  );
};

export default NavbarLinksMolecule;
