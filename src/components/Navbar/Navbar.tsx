import React, { useState } from "react";

export const Navbar = (props: any) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export const NavItem = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};
