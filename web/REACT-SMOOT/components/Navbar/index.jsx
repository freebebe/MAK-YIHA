import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElement.jsx";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">YiHA!</NavLogo>
          <ModbileIcon>
            <Fabars />
          </ModbileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">
                About
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};
export default Navbar;
