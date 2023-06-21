import { createStore, applyMiddleware } from "redux";
import reducers, { initialState } from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools( applyMiddleware(thunk))
);
