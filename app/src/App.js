import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Common Components
import Navbar from "./components/common/Navbar/Navbar";
import ModalController from "./components/modals";
import RequireAuth from "./components/common/RequireAuth";

// Pages
import Home from "./components/pages/Home";
import SavedHikes from "./components/pages/SavedHikes.js";
import Meetup from "./components/pages/Meetup";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/savedHikes"
                component={RequireAuth(SavedHikes)}
              />
              <Route path="/:id" component={RequireAuth(Meetup)} />
            </Switch>
          </div>
        </Router>
        <ModalController />
      </div>
    </Provider>
  );
}

export default App;
