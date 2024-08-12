import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogDetailPage() {
  const { query } = useRouter();
  console.log("qr", query.pageID);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (pageID) => {
    const res = await fetch(`https://dev.to/api/articles/${pageID}`);
    const data = await res.json();
    setArticleDetail(data);
    console.log("data", data);
  };

  useEffect(() => {
    getArticleById(query.pageID);
  }, []);

  return (
    <main className="md:px-[15rem] px-5 grid gap-10  mt-5 mb-20">
      <div className="grid gap-10 text-justify">
        <h1 className="text-4xl font-bold">
          {articleDetail?.title}
          {}
        </h1>
        <div className="flex items-center gap-20 text-gray-500 text-sm">
          <div className="flex justify-center gap-2 items-center">
            <img
              src={articleDetail?.user?.profile_image}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <h1>{articleDetail?.user?.username}</h1>
          </div>
          <p>{articleDetail?.readable_publish_date}</p>
        </div>
        <div className="h-[464px]">
          <img
            src={articleDetail?.social_image}
            alt=""
            className="size-full object-cover"
          />
        </div>
      </div>
      <div
        className="blog-detail"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </main>
  );
}
