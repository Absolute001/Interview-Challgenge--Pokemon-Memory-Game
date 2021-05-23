import React from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

interface Props {
  isShown: () => boolean;
  key: number;
  pokemon: string;
  gameStarted: boolean;
  onClick: () => void;
}

const Card: React.FC<Props> = ({ pokemon, gameStarted, onClick, isShown }) => {
  return (
    <div
      onClick={onClick}
      className={`${gameStarted && isShown() && "cursor-not-allowed"}`}
    >
      <ReactCardFlip
        isFlipped={gameStarted && !isShown()}
        flipDirection={"horizontal"}
      >
        <FrontCard pokemon={pokemon} />
        <BackCard />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
