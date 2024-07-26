import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
// import StudentCard
//  from "../card-status/StudentCard";
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <h2>Gram Urja</h2>

    <div className="options">
      {/* <Link className="option" to="/aboutUs">
        ABOUT US
      </Link> */}
      {/* <Link className="option" to="/cardStatus">
        StudentCard
      </Link> */}
      
        <>
        <Link className="option link-option" to="/signin">
          SIGN IN
        </Link>
        <Link className="option" to="/add-fellow">
        ADD FELLOW 
      </Link>
      </>
     
    </div>
  </div>
);

export default Header;
