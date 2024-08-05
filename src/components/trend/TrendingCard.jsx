import React from "react";
const trendEl = [
  {
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/a1.png",
  },
  {
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/a2.png",
  },
  {
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/a3.png",
  },
  {
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/a4.png",
  },
];
const TrendingCard = () => {
  return (
    <div className="flex gap-5 justify-between max-sm:grid">
      {trendEl.map((trendElObject) => {
        return (
          <div className="relative w-[289px] h-[320px] rounded-lg">
            <div className="size-full relative">
              <img
                src={trendElObject.img}
                alt=""
                className="object-cover size-full rounded-lg relative "
              />
              <div className="size-full rounded-lg bg-[rgba(20,22,36,0.4)] absolute top-0 left-0 right-0 bottom-0"></div>
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white text-base ">
              <b className="bg-blue-600 rounded-lg py-1 px-4 font-medium ">
                {trendElObject.title}
              </b>
              <p className=" font-bold mt-2 text-justify ">
                {trendElObject.summary}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCard;
