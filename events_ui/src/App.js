import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import "./App.scss";
import Users from "./Users/Users";
import Navigation from "./Navigation/Nav";
import EventsFeed from "./Feed/Feed";

function App() {

  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <EventsFeed />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
