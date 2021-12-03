import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getMenuList, MenuList } from "./MenuList";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const isloggedin = localStorage.getItem("loggedIn");

  // const renderNav = () => {
  //   MenuList.map(({ url, title }, index) => {
  //     return (
  //       <li key={index}>
  //         <NavLink exact to={url} activeClassName="active">
  //           {title}
  //         </NavLink>
  //       </li>
  //     );
  //   });
  // };
  console.log(`isloggedin`, isloggedin);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo"> Logo </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {getMenuList(isloggedin).map(({ url, title }, index) => (
          <li key={index}>
            <NavLink exact to={url} activeClassName="active">
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
