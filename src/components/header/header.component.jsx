import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
// import StudentCard
//  from "../card-status/StudentCard";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <h2>Gram Urja Foundation</h2>

    <div className="options">
      {/* <Link className="option" to="/aboutUs">
        ABOUT US
      </Link> */}
      {/* <Link className="option" to="/cardStatus">
        StudentCard
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
