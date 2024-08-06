import BlogPost_card from "@/components/blogPost/BlogPost_card";

export default function Blog() {
  return (
    <main className="md:px-[15rem] px-5 grid gap-10  mt-5 mb-20">
      <h1 className="font-semibold text-2xl">All Blog Post</h1>
      <BlogPost_card />
    </main>
  );
}
