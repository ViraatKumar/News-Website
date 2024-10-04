import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://news-website-lex2.onrender.com/news"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://news-website-lex2.onrender.com/search?q=${query}`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error searching news:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl">Acowale News</h1>
          <input
            type="text"
            placeholder="Search news..."
            className="mt-2 p-2 w-full rounded"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-white text-blue-600 p-2 mt-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
