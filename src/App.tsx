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

  const filteredData = games.filter((game: Game) =>
    game.title.toLowerCase().includes(searchValue)
  );

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
      <h1 className="text-3xl font-bold mb-2">Videogames Critics</h1>
      <SearchBox handleSearchInput={handleSearchInput} />
      {games.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <CardList filteredData={filteredData} />
      )}
    </div>
  );
}

export default App;
