import React from 'react'

const Comment = props => {

  const image = "http://www.sessionlogs.com/media/icons/defaultIcon.png"

  return (
    <div>
      <img src={image} className="commenter-photo"/>
      <div>
        <div>{props.author.username}</div>
        <div>{props.created}</div>
      </div>
      <div>{props.comment.content}</div>
    </div>
  )
}

export default Comment;
