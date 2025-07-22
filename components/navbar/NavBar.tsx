import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import { ModeToggle } from "./DarkMode";
import LinksDropDown from "./LinksDropDown";
import { Suspense } from "react";

const NavBar = () => {
  return (
    <nav className="border-b ">
      <Container className="flex  flex-col sm:flex-row sm:justify-between gap-4 sm:items-center flex-wrap py-8 ">
        <Logo />
        <Suspense >
          <NavSearch />
        </Suspense>

        <div className="flex gap-4 items-center">
          <CartButton />
          <ModeToggle />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
