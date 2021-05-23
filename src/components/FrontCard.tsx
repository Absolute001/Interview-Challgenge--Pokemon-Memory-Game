import React, { useState } from "react";

interface Props {
  pokemon: string;
}

const FrontCard: React.FC<Props> = ({ pokemon }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div
      className={`bg-white rounded border-2 transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={pokemon}
        onLoad={() => setLoaded(true)}
        className="w-96 md:w-48"
        alt="card"
      />
    </div>
  );
};

export default FrontCard;
