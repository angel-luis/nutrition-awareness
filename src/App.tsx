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
      <h1 className="text-3xl font-bold mb-4">Videogames Critics</h1>

      <SearchBox handleSearchInput={handleSearchInput} />

      {games.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          <CardList filteredData={filteredData} />
        </div>
      )}

      <div>
        <i>Data updated at 2024</i> - Made by Angel Luis
      </div>
    </div>
  );
}

export default App;
