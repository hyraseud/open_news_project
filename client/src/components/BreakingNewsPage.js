import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NewsArticle from "./NewsArticle";

const BreakingNewsPage = () => {
    const [breakingNewsList, setBreakingNewsList] = useState([]);

    useEffect(() => {
        const apiKey = "df7de36236384981a56a4af2e9de3a72";
        const endpoint = `https://newsapi.org/v2/everything?q=breaking-news&sortBy=publishedAt&apiKey=${apiKey}`;

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
        <div>
            <Nav />
            <div className="breaking-news-page">
                <div className="news-container">
                    {breakingNewsList.map((article) => (
                        <NewsArticle article={article} key={article.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreakingNewsPage;
