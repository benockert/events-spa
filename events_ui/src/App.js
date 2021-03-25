import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import "./App.scss";

//top navigation and login bar
import Navigation from "./Navigation/Nav";
//events feed
import EventsFeed from "./Feed/Feed";
//user pages
import ListUsers from "./Users/List";
import NewUser from "./Users/New";

function App() {

  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <EventsFeed />
        </Route>
        <Route path="/users" exact>
          <ListUsers />
        </Route>
        <Route path="/users/new" exact>
          <NewUser />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
