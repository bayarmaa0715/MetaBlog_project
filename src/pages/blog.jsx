import BlogPost_card from "@/components/blogPost/BlogPost_card";
import { SearchContext } from "@/provider/SearchProvider";
import { useContext } from "react";

export default function Blog() {
  const { searchValue, isLoading, perPage, setPerPage } =
    useContext(SearchContext);

  return (
    <main className="md:px-[5rem] px-5 grid gap-10  mt-5 mb-20 ">
      <h1 className="font-semibold text-2xl">All Blog Post</h1>
      <BlogPost_card />
      <div className="flex justify-center mt-20">
        <button
          className="bg-gray-200 px-4 py-1 rounded-lg"
          onClick={() => setPerPage(perPage + 3)}
        >
          Learn More
        </button>
      </div>
    </main>
  );
}
