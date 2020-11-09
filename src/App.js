import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404";
import { ConnectedRouter } from "connected-react-router";

import { Provider } from "react-redux";
import configureStore, { history } from "./store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact strict path="/" component={HomePage} />
            <Route exact path="/books/page/:currentPage(\d+)" component={BooksPage}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
