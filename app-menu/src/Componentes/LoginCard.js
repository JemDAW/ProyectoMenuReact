import React from "react";
import Link from "./Link";
import "../Css/LoginCard.css"

const LoginCard = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/login" className="item">
        Log In
      </Link>
    </div>
  );
};

export default LoginCard;
