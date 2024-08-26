import { Game } from "../types.definition";

export default function CardList({ filteredData }: { filteredData: Game[] }) {
  return filteredData.map(data => <p key={data.id}>{data.title}</p>);
}
