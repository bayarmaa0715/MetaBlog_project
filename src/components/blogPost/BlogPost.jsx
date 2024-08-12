import React, { useContext, useState } from "react";
import BlogPost_card from "./BlogPost_card";
import { SearchContext } from "@/provider/SearchProvider";
const blogMenu = [
  { menuName: "All", href: "" },
  { menuName: "Design", href: "" },
  { menuName: "Travel", href: "" },
  { menuName: "Fashion", href: "" },
  { menuName: "Technology", href: "" },
  { menuName: "Branding", href: "" },
];

const BlogPost = () => {
  const { searchValue } = useContext(SearchContext);

  return (
    <div className="flex flex-col gap-8 ">
      <h1 className="font-semibold text-2xl">All Blog Post</h1>
      <div className=" md:flex md:justify-between text-gray-600 font-medium">
        <ul className=" md:flex md:gap-5 grid grid-cols-3">
          {blogMenu.map((menuObject) => {
            return <a href="">{menuObject.menuName}</a>;
          })}
        </ul>
        <p>View all</p>
      </div>
      <p className="bg-slate-200 p-2 rounded-lg">Хайлт утга:{searchValue}</p>
      <BlogPost_card />
      <div className="flex justify-center mt-20">
        <button className="bg-gray-200 px-4 py-1 rounded-lg">Learn More</button>
      </div>
    </div>
  );
};

export default BlogPost;
