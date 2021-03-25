import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import pick from 'lodash/pick';

import { get_user_id } from '../store'

import { new_post, get_posts } from '../api';

function NewEvent() {
  let history = useHistory();
  let [post, setPost] = useState({title: "", date: "", description: "", invitees: ""});

  //validates the list of invitees
  function check_invitees(invitees) {
    let valid = true;
    let email_list = invitees.split(", ");
    for (var i = 0; i < email_list.length; i++) {
      valid = valid && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_list[i]);
    }
    if (!valid) {
      return "One or more invitee emails are not valid."
    }
    return "";
  }

  function anyBlank(post) {
    console.log("blank", post)
    return post.title === "" || post.date === "" || post.description === "";
  }

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    // get rid of the email msg entry
    let data = pick(post, ['title', 'date', 'description', 'invitees']);
    // add the user_id to the post
    data.user_id = get_user_id();

    new_post(data).then(() => {
      get_posts();
      history.push("/"); //TODO move to new post show page
    });
  }

  function updateField(field, ev) {
    let new_event = Object.assign({}, post);
    new_event[field] = ev.target.value;
    new_event.invitee_msg = check_invitees(new_event.invitees);
    setPost(new_event);
  }

  return (
    <Row>
      <Col>
        <h2>New Event</h2>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control as="input" rows={4}
                          onChange={(ev) => updateField("title", ev)}
                          value={post.title} />
            <Form.Text className="text-muted">
              Enter a name for your event.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control as="input" type="date"
                          rows={2}
                          onChange={(ev) => updateField("date", ev)}
                          value={post.date} />
            <Form.Text className="text-muted">
              Enter a date for your event.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={(ev) => updateField("description", ev)}
                          value={post.description} />
            <Form.Text className="text-muted">
              Enter a description for your event.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Invitees</Form.Label>
            <Form.Control as="input"
                          rows={4}
                          placeholder="email1@example.com, email2@example.com"
                          onChange={(ev) => updateField("invitees", ev)}
                          value={post.invitees} />
            <Form.Text className="text-muted">
              Enter the emails of the invitees for your event, separated by commas.
            </Form.Text>
            <p>{post.invitee_msg}</p>
          </Form.Group>
          <Button variant="primary"
                  type="submit"
                  disabled={post.invitee_msg !== "" || anyBlank(post)}>
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

function state3props() {
  return {};
}

export default connect(state3props)(NewEvent);
