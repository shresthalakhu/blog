import React from 'react';
import { Link } from 'react-router-dom';


const ArticlesList = ({ articles}) => {
    return (
        <>
             {articles.map((article, key) => (
                <>
                <Link key={key} to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    
                    </Link>
                    <p>{article.content[0].substring(0,150)}...</p>
                    <Link key={key} to={`/article/${article.name}`}>Read More</Link>
                    </>
                   
            ))}
        </>
    )
}

export default ArticlesList
