import React, { useContext } from "react";
import { PokeContext } from "../contexts/PokemonApi";
import CardContainer from "../containers/CardContainer";
import WinPage from "../containers/WinPage";

const Main = () => {
  const { gameWin } = useContext(PokeContext);

  return gameWin ? <WinPage /> : <CardContainer />;
};

export default Main;
