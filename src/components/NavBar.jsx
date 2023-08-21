import React from "react";
import logo from "../assets/logologo.svg";
import "../styles/NavBar.scss";
import { Link } from "react-router-dom";
import { useWeb3Modal } from '@web3modal/react';


export const NavBar = () => {
  const { open, close } = useWeb3Modal()
  return (
    <nav className="flex justify-between navbar">
      <div>
        <Link to="/">
        <img src={logo} alt="Crow Logo" className="logo" /></Link>
      </div>
      <div className="nav-menu">
        <Link to="/create">
          {" "}
          <span>Create</span>
        </Link>
        <Link to="/mycontracts">
          {" "}
          <span>My contracts</span>
        </Link>

      </div>
      <div>
        <button className="mainbutton" onClick={() => open()}>CONNECT WALLET</button>
      </div>
    </nav>
  );
};
