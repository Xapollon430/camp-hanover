import styled from "styled-components";
import chLogo from "../../images/ch-logo.png";

import "./Header.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Drawer } from "@material-ui/core";
import { HamburgerSpin } from "react-animated-burgers";

const StyledSpin = styled(HamburgerSpin)`
  outline: none;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // creating my own routing system bruh
  const redirect = (e) => {
    const link = e.target.innerHTML;

    switch (link) {
      case "Gallery":
        history.push("/gallery");
        break;
      case "Location":
        history.push("/location");
        break;
      case "About Us":
        history.push("/about-us");
        break;
      case "Press Release":
        history.push("/press-release");
    }
    setHamburgerOpen(false);
  };

  return (
    <div className="header-wrap">
      <BrandLink to="/">
        <img src={chLogo}></img>
      </BrandLink>
      <div className="empty-div"></div>
      <StyledSpin onClick={toggleMenu} isActive={hamburgerOpen} />
      <Drawer anchor="left" open={hamburgerOpen} onClose={toggleMenu}>
        <div className="drawer-buttons" onClick={redirect}>
          <Button variant="outlined">About Us</Button>
          <Button variant="outlined">Gallery</Button>
          <Button variant="outlined">Location</Button>
          <Button variant="outlined">Press Release</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
