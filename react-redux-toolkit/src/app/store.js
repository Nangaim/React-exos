import { configureStore } from "@reduxjs/toolkit"
import picturesReducer from "../feature/pictures.slice"
import thunk from "redux-thunk"

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
  middleware: [thunk],
})
