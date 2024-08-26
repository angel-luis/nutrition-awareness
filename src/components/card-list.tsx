import { Game } from "../types.definition";

export default function CardList({ filteredData }: { filteredData: Game[] }) {
  return filteredData.map(data => <p key={data.title}>{data.title}</p>);
}
