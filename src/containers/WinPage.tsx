import React, { useContext } from "react";
import Button from "../components/Button";
import { PokeContext } from "../contexts/PokemonApi";

const WinPage = () => {
  const { setGameWin, fetchPokemons } = useContext(PokeContext);

  return (
    <section className=" flex h-screen bg-blue-light">
      <div className="p-4 my-auto flex flex-col mx-auto">
        <img src="https://i.imgur.com/PDDainu.png" alt="you win!" />
        <Button
          disabled={false}
          className="p-2 text-lg font-bold
            hover:bg-blue-dark hover:text-white
          border-2 mx-auto bg-yellow rounded my-8"
          onClick={() => {
            setGameWin(false);
            fetchPokemons();
          }}
        />
      </div>
    </section>
  );
};

export default WinPage;
