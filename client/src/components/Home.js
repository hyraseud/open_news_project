import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import NewsArticle from "./NewsArticle";

const Home = () => {
    const navigate = useNavigate();
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        } else {
            const apiKey = "df7de36236384981a56a4af2e9de3a72";
            const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

            fetch(endpoint)
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === "ok") {
                        setNewsList(data.articles);
                    } else {
                        console.error(data.message);
                    }
                })
                .catch((err) => console.error(err));
        }
    }, [navigate]);

    return (
        <>
            <Nav />
            <main className="home">
                <div className="news-container">
                    {newsList.map((article) => (
                        <NewsArticle article={article} key={article.title} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
