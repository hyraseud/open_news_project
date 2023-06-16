import React from "react";

const NewsArticle = ({ article }) => {
    const { title, description, url, urlToImage } = article;

    return (
        <div className="news-article">
            <img src={urlToImage} alt={title} className="article-image" />
            <h3 className="article-title">{title}</h3>
            <p className="article-description">{description}</p>
            <a href={url} className="article-link" target="_blank" rel="noopener noreferrer">
                Read more
            </a>
        </div>
    );
};

export default NewsArticle;
