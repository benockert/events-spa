import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { get_user_id } from '../store'

import { new_response, get_responses } from '../api';

export default function NewResponse(props) {
  let history = useHistory();
  const [response, setResponse] = useState({response: "No"});

  function updateResponse(ev) {
    let resp = Object.assign({}, response);
    resp["response"] = ev.target.value;
    setResponse(resp);
  }

  function onSubmit(ev) {
    ev.preventDefault();

    //sets the user_id and the post_id for this comment
    response.user_id = get_user_id();
    response.post_id = props.post_id;
    let event_path = "/events/" + response.post_id;

    new_response(response).then(() => {
      get_responses();
      history.push(event_path);
    });
  }

  return (
    <Row>
        <Form onSubmit={onSubmit}>
            <Form.Group>
            <b>Update your response:  </b>
              <Button variant="outline-success"
                      type="submit"
                      onClick={() => setResponse({response: "Yes"})}
              >
                Yes
              </Button>
              <Button variant="outline-danger"
                      type="submit"
                      onClick={() => setResponse({response: "No"})}
              >
                No
              </Button>
            </Form.Group>
        </Form>
    </Row>
  );
}
