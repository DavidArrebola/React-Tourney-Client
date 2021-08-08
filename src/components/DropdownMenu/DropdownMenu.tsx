import React from "react";

export const DropdownMenu = () => {
  return <div className="dropdown"></div>;
};

export const DropdownItem = (props: any) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-button">{props.rightIcon}</span>
    </a>
  );
};
