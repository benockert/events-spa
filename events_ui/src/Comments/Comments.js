import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

function Comment({comment}) {
  return (
    <Col>
      <Card style={{ width: '45rem' }}>
        <Card.Body>
          <Card.Text>
            {comment.body}
            <br/>
            <i>Posted by {comment.user.name}</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function CommentsFeed({comments}) {
  // filters out comments that are not meant for this post
  let post_id = localStorage.getItem("post_id");
  let post_comments = comments.filter((comment) => comment.post_id == post_id);

  let cards = post_comments.map((comment) => <Comment comment={comment} key={comment.id}/>);
  return (
    <div>
      <Row>
        { cards }
      </Row>
    </div>
  );
}


export default connect(({comments}) => ({comments}))(CommentsFeed);
