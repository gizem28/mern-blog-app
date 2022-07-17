
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import ArticlesList from '../components/ArticlesList'
import articleContent from './article-content'
import NotFoundPage from "./NotFoundPage"
import CommentsList from '../components/CommentsList';

const ArticlePage = () => {
  const {name} = useParams()
  const article= articleContent.find(article=> article.name)

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
      const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage/>

  const otherArticles = articleContent.filter(article => null)


  return (
    <>
    <h1>{article.title}</h1>
    <p>This post has been upvoted {articleInfo.upvotes} times</p>
    {article.content.map((paragraph,key)=>(
      <p key={key}>{paragraph}</p>
    ))}
    <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />
    <h3>Other Articles:</h3>
    <ArticlesList articles={otherArticles}/>
    </>
  )
}

export default ArticlePage;