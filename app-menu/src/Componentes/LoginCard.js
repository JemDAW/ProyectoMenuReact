import React from "react";
import Link from "./Link";
import "../Css/LoginCard.css"

const LoginCard = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/login" className="item">
        Log In
      </Link>
      <div className="right menu">
      <Link href="/" className="item">
      <img src="https://i.ibb.co/68sHdmz/pastamania.png" alt="pastamania" className="ui small image"/>
      </Link>
      </div>
    </div>
  );
};

export default LoginCard;
