import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homefeed from "./components/Homefeed";
import Notifications from "./components/Notifactions";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import GlobalStyles from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Homefeed />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route exact path="/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
