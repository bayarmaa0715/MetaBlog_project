import React from "react";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Trending</h1>
      <TrendingCard />
    </div>
  );
};

export default Trending;
