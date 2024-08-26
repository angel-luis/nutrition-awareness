import { Game } from "../types.definition";

export default function CardList({ filteredData }: { filteredData: Game[] }) {
  return filteredData.map(data => (
    <div
      key={data.id}
      className="w-48 rounded-md p-4 border border-gray-200 shadow-md flex flex-col justify-between"
    >
      <div>
        <p className="text-xl font-bold tracking-tight">{data.title}</p>
        <p className="mb-4">({data.release_year})</p>
      </div>
      <div>
        <span
          className={`inline-block p-4 rounded-full ${
            Number.parseInt(data.meta_critic_score) > 75
              ? "bg-green-200"
              : Number.parseInt(data.meta_critic_score) > 60
              ? "bg-orange-200"
              : "bg-red-200"
          }`}
        >
          {data.meta_critic_score}
        </span>
      </div>
    </div>
  ));
}
