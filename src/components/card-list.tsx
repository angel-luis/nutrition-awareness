export default function CardList({ filteredData }: { filteredData: string[] }) {
  return filteredData.map(data => <p key={data}>{data}</p>);
}
