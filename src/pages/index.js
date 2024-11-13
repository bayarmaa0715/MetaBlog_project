import BlogPost from "@/components/blogPost/BlogPost";
import Header from "@/components/header/header";
import HeroSection from "@/components/herosection/HeroSection";
import Trending from "@/components/trend/Trending";

export default function Home() {
  return (
    <main className="md:px-[5rem] px-5 grid  gap-20 mb-20">
      <HeroSection />
      <Trending />
      <BlogPost />
    </main>
  );
}
