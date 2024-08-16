import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext(null);
const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [trendArticles, setTrendArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getArticles = async (pageNum, perPage) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=${pageNum}&per_page=${perPage}`
      );
      const data = await response.json();
      setArticles(data);
      console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArticles(9, 3);
  }, []);

  const getTrendArticles = async (pageNum, perPage, topDayNum) => {
    try {
      setIsLoading(true);
      const resp = await fetch(
        `https://dev.to/api/articles?page=${pageNum}&per_page=${perPage}&top=${topDayNum}`
      );
      const trendData = await resp.json();
      setTrendArticles(trendData);
      console.log("data", trendData);
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendArticles(2, 4, 5);
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, articles, trendArticles }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
