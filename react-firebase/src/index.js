// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// import "./styles/index.scss"

// // redux
// import { applyMiddleware, createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from "redux-thunk"
// import { Provider } from "react-redux"
// import rootReducer from "./reducers"

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import App from "./App"

// Redux
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import rootReducer from "./reducers"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
