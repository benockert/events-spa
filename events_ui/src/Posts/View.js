import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NewComment from "../Comments/New";
import CommentsFeed from "../Comments/Comments";

function ShowEvent({posts}) {

  //gets the id of the current post using the url
  const location = useLocation();
  let event_number = location.pathname.split("/")[2];
  let post = posts[event_number - 1];

  localStorage.setItem("post_id", post.id);

  return (
    <Row>
      <Col>
        <h2>Show Event #{event_number}</h2>
        <p><b>Title: </b>{post.title}</p>
        <p><b>Date: </b>{post.date}</p>
        <p><b>Description: </b>{post.description}</p>
        <p><b>Invitees: </b>{post.invitees}</p>
        <h3>Responses</h3>
        <br/>
        <h3>Comments</h3>
        <NewComment post_id={post.id}/>
        <CommentsFeed />
      </Col>
    </Row>
  );
}

export default connect(({posts}) => ({posts}))(ShowEvent);
