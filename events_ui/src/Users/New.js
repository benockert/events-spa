import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import pick from 'lodash/pick';

import { new_user, get_users } from '../api';

function NewUser() {
  let history = useHistory();
  const [user, setUser] = useState({name: "", pass1: "", pass2: ""});

  function check_email(email) {

    // from w3resource.com
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return ""
    }

    return "Invalid email address."

  }

  function check_pass(p1, p2) {
    if (p1 !== p2) {
      return "Passwords don't match.";
    }

    if (p1.length < 8) {
      return "Password is too short.";
    }

    return "";
  }

  function update(field, ev) {
    let u1 = Object.assign({}, user);
    u1[field] = ev.target.value;
    u1.password = u1.pass1;
    u1.pass_msg = check_pass(u1.pass1, u1.pass2);
    u1.email_msg = check_email(u1.email);
    setUser(u1);
  }

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(user);
    //get rid of the extra password and pass_msg entry
    let data = pick(user, ['name', 'email', 'password']);
    new_user(data).then(() => {
      get_users();
      history.push("/users");
    });
  }

  return (
    <Row>
      <Col>
        <h2>New User</h2>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                          onChange={(ev) => update("name", ev)}
                          value={user.name || ""} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text"
                          onChange={(ev) => update("email", ev)}
                          value={user.email || ""} />
            <p>{user.email_msg}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          onChange={(ev) => update("pass1", ev)}
                          value={user.pass1 || ""} />

          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password"
                          onChange={(ev) => update("pass2", ev)}
                          value={user.pass2 || ""} />
            <p>{user.pass_msg}</p>
          </Form.Group>
          <Button variant="primary"
                  type="submit"
                  disabled={user.pass_msg !== "" || user.email_msg !== ""}>
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

function state2props() {
  return {};
}

export default connect(state2props)(NewUser);
