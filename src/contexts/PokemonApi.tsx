import React, { useState, useEffect } from "react";
import { gottaCatchEmAll } from "../axios/axiosFn";

const PokeContext = React.createContext<any>(undefined);

const PokeContextProvider: React.FC = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState<string[]>([]);
  const [gameWin, setGameWin] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchPokemons = () => {
    setSelectedPokemons([]);
    for (let i: number = 0; i < 4; i++) {
      gottaCatchEmAll
        .get(`pokemon/${Math.round(Math.random() * 897) + 1}`)
        .then((res) => {
          if (selectedPokemons.indexOf(res.data.sprites.front_default) === -1) {
            setSelectedPokemons((prevState) =>
              [...prevState, res.data.sprites.front_default].concat(
                res.data.sprites.front_default
              )
            );
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    fetchPokemons();
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PokeContext.Provider
      value={{
        fetchPokemons,
        selectedPokemons,
        setSelectedPokemons,
        setGameWin,
        gameWin,
        loaded,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContext, PokeContextProvider };
