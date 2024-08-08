import React from "react";
import BlogPost_card from "./BlogPost_card";
import { list } from "postcss";
const blogMenu = [
  { menuName: "All", href: "" },
  { menuName: "Design", href: "" },
  { menuName: "Travel", href: "" },
  { menuName: "Fashion", href: "" },
  { menuName: "Technology", href: "" },
  { menuName: "Branding", href: "" },
];

const BlogPost = () => {
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

      <BlogPost_card />
      <div className="flex justify-center mt-20">
        <button className="bg-gray-200 px-4 py-1 rounded-lg">Learn More</button>
      </div>
    </div>
  );
};

export default BlogPost;
