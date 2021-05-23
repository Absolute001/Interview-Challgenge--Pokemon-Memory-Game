import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-blue-dark">
      <img
        className="w-2/4 lg:w-1/6 mx-auto"
        src="https://i.imgur.com/BbPS4Jq.png"
        alt="logo"
      />
    </nav>
  );
};

export default Navbar;
