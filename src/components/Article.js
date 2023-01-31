import React from "react";

const Article = ({ article }) => {
    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", options);
        let options = {
            year: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        return newDate;
    };

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {article.date}</em>
            </div>
            <p>{article.content}</p>
            <div className="btn-container">
                <button>Edit</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;
