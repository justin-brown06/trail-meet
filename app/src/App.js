import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/MainPage" component={MainPage} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;