import React from "react"

const CommentCard = ({ comment }) => {
  const dateFormater = (date) => {
    let days = Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24))
    if (days === 0) {
      return "aujourd'hui"
    } else if (days === 1) {
      return "il y a 1 jour"
    } else {
      return "il y a " + days + " jours"
    }
  }
  return (
    <div className="comment-post">
      <h5>{comment.commentAuthor}</h5>
      <h5 className="date">Posté {dateFormater(comment.date)}</h5>
      <p>{comment.text}</p>
    </div>
  )
}

export default CommentCard
