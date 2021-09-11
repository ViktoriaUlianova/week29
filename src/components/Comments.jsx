import React from 'react'
import Comment from './Comment'

function Comments({comments, setComments}) {
    return (
    <div className="comments-container">
    <ul className="comments-list">
        {comments.map((comment , index) => (
        <Comment 
        text={comment.text} 
        setComments={setComments} 
        comment={comment} 
        comments={comments}
        index={index} 
        key={comment.id}/>))}
    </ul>
    </div>
    )
}

export default Comments

