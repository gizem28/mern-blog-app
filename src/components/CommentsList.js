import React from 'react';
// import AddCommentForm from './AddCommentForm';

const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            {console.log(comment)}
            <h4>{comment?.username}</h4>
            <p>{comment?.text}</p>
        </div>
    ))}
    {/* <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} /> */}
    </>
);

export default CommentsList;