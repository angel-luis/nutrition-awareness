import { useRef } from "react";

export default function SearchBox({
  handleSearchInput,
  clearSearchInput,
}: {
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearchInput: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        className="p-2 rounded-md bg-gray-100 text-slate-800"
        type="text"
        placeholder="Search"
        onChange={handleSearchInput}
      />
      <button
        className="ml-2 hover:underline"
        onClick={() => {
          clearSearchInput();
          inputRef.current!.value = "";
        }}
      >
        Clear
      </button>
    </>
  );
}
