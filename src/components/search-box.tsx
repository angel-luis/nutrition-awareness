export default function SearchBox({
  handleSearchInput,
}: {
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="p-2 rounded-md bg-gray-100 text-slate-800"
      type="text"
      placeholder="Search"
      onChange={handleSearchInput}
    />
  );
}
