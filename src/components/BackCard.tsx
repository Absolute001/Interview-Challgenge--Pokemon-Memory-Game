import React from "react";
import PokeballIcon from "../assets/img/poke-ball.png";

const FrontCard: React.FC = () => {
  return (
    <div className="bg-white rounded border-2">
      <img src={PokeballIcon} className="w-96 md:w-48" alt="card" />
    </div>
  );
};

export default FrontCard;
