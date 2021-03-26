import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import "./App.scss";

//top navigation and login bar
import Navigation from "./Navigation/Nav";
//events pages
import EventsFeed from "./Posts/Feed";
import ShowEvent from "./Posts/View";
import NewEvent from "./Posts/New";
//user pages
import ListUsers from "./Users/List";
import NewUser from "./Users/New";

function App() {

  // front-end mock router
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
        <Route path="/events/new" exact>
          <NewEvent />
        </Route>
        <Route path="/events/:id">
          <ShowEvent />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
