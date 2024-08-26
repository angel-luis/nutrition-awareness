import { Game } from "../types.definition";

export default function CardList({ filteredData }: { filteredData: Game[] }) {
  return filteredData.map(data => (
    <div
      key={data.id}
      className="w-48 rounded-md p-4 border border-slate-500 shadow-md flex flex-col justify-between cursor-pointer transition duration-300 hover:bg-slate-500/40"
    >
      <div>
        <p className="text-xl font-bold tracking-tight">{data.title}</p>
        <p className="mb-4">({data.release_year})</p>
      </div>
      <div>
        <span
          className={`inline-block p-4 rounded-full ${
            Number.parseInt(data.meta_critic_score) > 75
              ? "bg-green-400"
              : Number.parseInt(data.meta_critic_score) > 60
              ? "bg-orange-400"
              : "bg-red-400"
          }`}
        >
          <span className="block w-[28px] h-[28px] text-white font-bold text-xl">
            {data.meta_critic_score}
          </span>
        </span>
      </div>
    </div>
  ));
}
