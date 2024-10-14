import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'; // Ensure you import your NewsItem component

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true); // Start loading
            setError(null); // Reset previous errors
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data.articles || []); // Safeguard against undefined
            } catch (error) {
                setError(error.message); // Capture error
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchArticles();
    }, [category]);

    // Conditional rendering based on loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2 className='text-center my-3 text-primary fw-bold '>
                Latest <span className='badge bg-danger'>News</span>
            </h2>
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem 
                        key={index}
                        title={news.title} 
                        description={news.description} 
                        url={news.url} 
                        src={news.urlToImage} 
                    />
                ))
            ) : (
                <p>No articles available.</p>
            )}
        </div>
    );
};

export default NewsBoard;
