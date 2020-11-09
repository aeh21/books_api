import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers/rootReducer";

export const history = createBrowserHistory();

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
);

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composedEnhancer
  );

  return store;
}
