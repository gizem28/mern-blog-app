import React from 'react'
import {useParams} from "react-router-dom"
import articleContent from './article-content'

const ArticlesPage = () => {
  const {name} = useParams()
  return (
    <div>This is the {name} article</div>
  )
}

export default ArticlesPage