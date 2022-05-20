import React from "react"
import { useDispatch } from "react-redux"
import { deletePost, DELETE_POST } from "../actions/post.action"

const Delete = ({ postId }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePost(postId))
      .then(() => {
        dispatch({ type: DELETE_POST, payload: { postId } })
      })
      .catch((err) => console.log(err))
  }
  return (
    <span className="delete">
      <i className="fa-solid fa-trash-can" onClick={() => handleDelete()}></i>
    </span>
  )
}

export default Delete
