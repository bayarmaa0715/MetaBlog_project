import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  console.log("articles", articles);
  return (
    <>
      <main className="h-screen grid justify-center items-center">
        <div className="grid grid-cols-3 gap-3">
          {articles.map((article) => {
            console.log("article", article);
            return <Card title={article.title} />;
          })}
        </div>
        <p>Main Content</p>
      </main>
    </>
  );
}
