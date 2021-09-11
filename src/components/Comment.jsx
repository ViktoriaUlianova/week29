import React from 'react'
import Comments from './Comments';

function Comment({text, comments, comment, setComments, index}) {
    const deleteHandler = () => {
        setComments(comments.filter((el) => el.id !== comment.id))
    }
    return (
        <div  className={"comment" + (index === 0 ? " selected" : "")}>
            <div className="comments">
                <li className="comments-item">{text}</li>
                <button onClick={deleteHandler}><i className="fas fa-trash trash-btn"></i></button>
            </div>
        </div>
    )
}

export default Comment
