import React from "react";
const BlogPost_cardEl = [
  {
    img: "/images/b1.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b2.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b3.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b4.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b5.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b6.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b7.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b8.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    img: "/images/b9.jpeg",
    title: "Technology",
    summary:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

const BlogPost_card = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {BlogPost_cardEl.map((blogOb) => {
        return (
          <div className="w-[392px] h-[476px] p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
            <div className="w-[360px] h-[240px] ">
              <img
                src={blogOb.img}
                alt=""
                className="size-full object-cover  rounded-lg"
              />
            </div>
            <div className="">
              <span className="bg-gray-100 text-blue-600 px-4 py-1 rounded-lg  ">
                {blogOb.title}
              </span>
              <p className=" flex flex-wrap my-4 text-2xl font-semibold">
                {" "}
                {blogOb.summary}
              </p>
              <p className="text-gray-500">August 20, 2022</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPost_card;
