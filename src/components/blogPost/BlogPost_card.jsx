import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { SearchContext } from "@/provider/SearchProvider";

const BlogPost_card = () => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=15&per_page=30"
    );
    const data = await response.json();
    setArticles(data);
    console.log("data", data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  // const find = articles?.filter((u) => {
  //   u.title.includes(searchValue);
  // });

  return (
    <div className="grid md:grid-cols-3 gap-5  grid-cols-1">
      {articles.map((blogOb) => {
        return (
          <Link href={`/${blogOb.id}`}>
            <div className="w-[392px] h-[476px] p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
              <div className="w-[360px] h-[240px] ">
                <img
                  src={blogOb.social_image}
                  alt=""
                  className="size-full object-cover  rounded-lg"
                />
              </div>
              <div className="">
                <span className="bg-gray-100 text-blue-600 px-4 py-1 rounded-lg  ">
                  {blogOb.type_of}
                </span>
                <p className=" flex flex-wrap my-4 text-2xl font-semibold">
                  {blogOb.title}
                </p>

                <div className="flex items-center gap-20 text-gray-500 text-sm">
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src={blogOb.user.profile_image}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <h1>{blogOb.user.username}</h1>
                  </div>
                  <p>{blogOb.readable_publish_date}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPost_card;
