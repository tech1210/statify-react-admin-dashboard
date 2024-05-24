import LogoDark from "../assets/images/logos/logo.png";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={LogoDark}
        style={{ height: "50px", color: "#6842FF" }}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
