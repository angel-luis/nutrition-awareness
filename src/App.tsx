import { useState } from "react";

import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fruits, _setFruits] = useState([
    "apple",
    "banana",
    "orange",
    "pineapple",
    "mango",
  ]);

  const [searchValue, setSearchValue] = useState("");

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const filteredData = fruits.filter(fruit =>
    fruit.toLowerCase().includes(searchValue)
  );

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-2">Fruit List</h1>
      <SearchBox handleSearchInput={handleSearchInput} />
      <CardList filteredData={filteredData} />
    </div>
  );
}

export default App;
