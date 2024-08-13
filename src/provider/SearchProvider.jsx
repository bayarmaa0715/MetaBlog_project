import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext(null);
const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getArticles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://dev.to/api/articles?page=15&per_page=9"
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
    getArticles();
  }, []);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, articles }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
