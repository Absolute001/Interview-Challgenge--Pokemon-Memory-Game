import React from "react";
import Navbar from "./components/Navbar";
import { PokeContextProvider } from "./contexts/PokemonApi";
import Main from "./pages/Main";

function App() {
  return (
    <PokeContextProvider>
      <main className="h-screen">
        <Navbar />
        <Main />
      </main>
    </PokeContextProvider>
  );
}

export default App;
