import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Homefeed from "./components/Homefeed";
import Notifications from "./components/Notifactions";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import GlobalStyles from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import BombsAway from "./BombsAway";

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
          <Route exact path="/:handle">
            <Profile />
          </Route>
          <Route exact path="/error/404">
            <BombsAway />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
