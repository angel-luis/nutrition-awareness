import Papa from "papaparse";
import { useEffect, useState } from "react";

import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import { Game } from "./types.definition";

function App() {
  const [games, setGames] = useState([] as Game[]);

  const [searchValue, setSearchValue] = useState("");

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function clearSearchInput() {
    setSearchValue("");
  }

  const filteredData = games
    .filter((game: Game) => game.title.toLowerCase().includes(searchValue))
    .slice(0, 12);

  useEffect(() => {
    (async () => {
      const file = await fetch("dataset.csv");
      const fileData = await file.text();

      Papa.parse(fileData, {
        header: true,
        complete: (results: { data: Game[] }) => {
          setGames(results.data);
        },
      });
    })();
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-display mb-4 select-none transition hover:text-slate-100">
        Videogames
        <br />
        Critics
      </h1>

      <SearchBox
        handleSearchInput={handleSearchInput}
        clearSearchInput={clearSearchInput}
      />

      {games.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="my-8 grid sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center max-w-4xl mx-auto">
          <CardList filteredData={filteredData} />
        </div>
      )}

      <div className="font-display text-xs">
        <i>Data updated at 2024</i> - Made by Angel Luis 👾{" "}
        <a
          className="text-blue-200 hover:underline"
          href="https://github.com/angel-luis/videogames-critics"
          target="_blank"
        >
          See on Github
        </a>
      </div>
    </div>
  );
}

export default App;
