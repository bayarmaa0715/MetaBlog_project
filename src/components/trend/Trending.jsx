import { useContext } from "react";
import TrendingCard from "./TrendingCard";
import { RiAlignTop } from "react-icons/ri";
import { RiAlignBottom } from "react-icons/ri";
import { SearchContext } from "@/provider/SearchProvider";

const Trending = () => {
  const { trendArticles } = useContext(SearchContext);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Trending</h1>
      <TrendingCard trendEl={trendArticles} />
      <div className="text-4xl flex justify-center text-gray-500 font-normal gap-96  mt-9">
        <button>
          <RiAlignTop />
        </button>
        <button>
          <RiAlignBottom />
        </button>
      </div>
    </div>
  );
};

export default Trending;
