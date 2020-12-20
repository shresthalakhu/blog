import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';


const ArticleListPage = () => {
    return (
        <div className="artcleListPage">
            <h1>Article</h1>
            <ArticlesList articles={articleContent} />
           
        </div>
    )
}

export default ArticleListPage
