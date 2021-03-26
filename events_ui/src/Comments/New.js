import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { get_user_id } from '../store'

import { new_comment, get_comments } from '../api';

export default function NewComment(props) {
  let history = useHistory();
  const [comment, setComment] = useState({body: ""});

  function updateComment(ev) {
    let comm = Object.assign({}, comment);
    comm["body"] = ev.target.value;
    setComment(comm);
  }

  function onSubmit(ev) {
    ev.preventDefault();

    //sets the user_id and the post_id for this comment
    comment.user_id = get_user_id();
    comment.post_id = props.post_id;
    let event_path = "/events/" + comment.post_id;

    new_comment(comment).then(() => {
      get_comments();
      history.push(event_path);
    });
  }

  return (
    <Row>
      <Col>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control type="text"
                          placeholder="Type a new comment here..."
                          onChange={(ev) => updateComment(ev)}
                          value={comment.body || ""} />
          </Form.Group>
          <Button variant="primary"
                  type="submit"
                  disabled={comment.body === ""}>
            Comment
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
