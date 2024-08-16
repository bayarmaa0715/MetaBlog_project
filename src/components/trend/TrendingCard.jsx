import React from "react";

const TrendingCard = ({ trendEl }) => {
  return (
    <div className="flex gap-5 justify-between max-sm:grid">
      {trendEl.map((trendElObject) => {
        return (
          <div className="relative w-[289px] h-[320px] rounded-lg">
            <div className="size-full relative">
              <img
                src={trendElObject.social_image}
                alt=""
                className="object-cover size-full rounded-lg relative "
              />
              <div className="size-full rounded-lg bg-[rgba(20,22,36,0.4)] absolute top-0 left-0 right-0 bottom-0"></div>
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white text-base ">
              <b className="bg-blue-600 rounded-lg py-1 px-4 font-medium ">
                {trendElObject.type_of}
              </b>
              <p className=" font-bold mt-2 text-justify ">
                {trendElObject.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCard;
