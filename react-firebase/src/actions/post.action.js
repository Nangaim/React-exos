import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../utils/firebase.config"

export const GET_POSTS = "GET_POSTS"
export const ADD_POST = "ADD_POST"
export const EDIT_POST = "EDIT_POST"

export const getPosts = () => {
  return (dispatch) => {
    return getDocs(collection(db, "posts"))
      .then((res) => {
        dispatch({
          type: GET_POSTS,
          payload: res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        })
      })
      .catch((err) => console.log(err))
  }
}

export const addPost = (data) => {
  return (dispatch) => {
    return addDoc(collection(db, "posts"), data)
      .then(() => {
        dispatch({
          type: ADD_POST,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export const editPost = (data) => {
  return (dispatch) => {
    return updateDoc(doc(db, "posts", data.id), {
      message: data.message,
    })
      .then(() => {
        dispatch({
          type: EDIT_POST,
          payload: { ...data },
        })
      })
      .catch((err) => console.log(err))
  }
}
