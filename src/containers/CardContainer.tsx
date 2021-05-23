import React, { useContext, useEffect, useState } from "react";
import { PokeContext } from "../contexts/PokemonApi";
import Button from "../components/Button";
import pokeball from "../assets/gif/pokeball.gif";
import Card from "../components/Card";
import { shuffleCards } from "../fn/functions";

const CardContainer: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [pairedPokemons, setPairedPokemons] = useState<string[]>([]);
  const [showCard, setShowCard] = useState<{ id: number; name: string }[]>([]);

  const { loaded, selectedPokemons, setSelectedPokemons, setGameWin } =
    useContext(PokeContext);

  useEffect(() => {
    if (showCard.length === 2) {
      if (showCard[0].name === showCard[1].name) {
        setPairedPokemons((prevState) => [...prevState, showCard[0].name]);
        setShowCard([]);
      } else {
        setTimeout(() => setShowCard([]), 500);
      }
    }
  }, [showCard]);

  useEffect(() => {
    if (pairedPokemons.length === 4) {
      setGameStarted(false);
      setPairedPokemons([]);
      setShowCard([]);
      setTimeout(() => {
        setGameWin(true);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairedPokemons]);

  const checkIsShown = (name: string, id: number) => {
    if (pairedPokemons.some((arr) => arr === name)) {
      return true;
    } else {
      return showCard.some((arr) => arr.id === id);
    }
  };
  return !loaded ? (
    <div className="flex h-full bg-blue-light">
      <img
        className="my-auto mx-auto max-w-full max-h-full"
        src={pokeball}
        alt="poke animation"
      />
    </div>
  ) : (
    <section className="flex min-h-screen bg-blue-light">
      {/*Pokemon Cards*/}
      <div className="flex flex-col mx-auto my-auto">
        <div className="w-screen-lg grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
          {selectedPokemons.map((pokemon: string, index: number) => (
            <Card
              onClick={() =>
                setShowCard((prevState) => [
                  ...prevState,
                  { id: index, name: pokemon },
                ])
              }
              isShown={() => checkIsShown(pokemon, index)}
              key={index}
              pokemon={pokemon}
              gameStarted={gameStarted}
            />
          ))}
        </div>

        {/*Game Starting Button */}
        <Button
          disabled={gameStarted}
          className="p-2 text-lg font-bold
            hover:bg-blue-dark hover:text-white
          border-2 mx-auto bg-yellow rounded my-8"
          onClick={() => {
            setSelectedPokemons((prevState: string[]) => [
              ...shuffleCards(prevState),
            ]);
            setGameWin(false);
            setGameStarted(true);
            setShowCard([]);
          }}
        />
      </div>
    </section>
  );
};

export default CardContainer;
