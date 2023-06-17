import React, { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";

const BreakingNewsPage = () => {
    const [breakingNewsList, setBreakingNewsList] = useState([]);

    useEffect(() => {
        const apiKey = "df7de36236384981a56a4af2e9de3a72";
        const endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=breaking-news&apiKey=${apiKey}`;

        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "ok") {
                    setBreakingNewsList(data.articles);
                } else {
                    console.error(data.message);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="breaking-news-page">
            <h1>Breaking News</h1>
            <div className="news-container">
                {breakingNewsList.map((article) => (
                    <NewsArticle article={article} key={article.title} />
                ))}
            </div>
        </div>
    );
};

export default BreakingNewsPage;
