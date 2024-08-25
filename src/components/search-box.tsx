export default function SearchBox({
  handleSearchInput,
}: {
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input type="text" placeholder="Search" onChange={handleSearchInput} />
  );
}
