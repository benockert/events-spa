import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react'

import { new_post } from '../api';

function NewEvent() {
  let [post, setPost] = useState({});

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    new_post(post);
  }

  function updateField(field, ev) {
    let new_event = Object.assign({}, post);
    new_event[field] = ev.target.value;
    new_event["user_id"] = 1;
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
          </Form.Group>
          <Button variant="primary" type="submit">
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
