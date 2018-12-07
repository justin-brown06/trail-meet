import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Navbar from "./components/common/Navbar";
import TodoForm from "./components/TodoForm";
import Hook from "./components/Hook";
import About from "./pages/About";
import MainPage from "./pages/MainPage";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Router>
            <Switch>
              <Route path="/" exact component={Hook} />
              <Route path="/About" exact path = {About}/>
              <Route path="/MainPage" exact path = {MainPage}/>

            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

function Hello() {
  return <p>Hello!</p>;
}

function Test() {
  return <p>Test!</p>;
}

export default App;
