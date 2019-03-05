import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxPromise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(reduxPromise, thunk, logger))
);

export default store;