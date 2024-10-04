const NewsCard = ({ article }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <img src={article.image} alt={article.title} className="rounded" />
        <h2 className="text-xl font-bold mt-2">{article.title}</h2>
        <p className="text-gray-700">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
          Read more
        </a>
      </div>
    );
  };
  
  export default NewsCard;
  