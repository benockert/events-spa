import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//no photo uploads needed

function Event({post}) {
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            {post.title}
          </Card.Title>
          <Card.Text>
            {post.description}
            <br/>
            <br/>
            Hosted by {post.user.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function EventsFeed({posts}) {
  let cards = posts.map((post) => <Event post={post} key={post.id} />);
  return (
    <div>
      <h2>Your Events Feed</h2>
      <p><Link to="/events/new">New Event</Link></p>
      <Row>
        { cards }
      </Row>
    </div>
  );
}

export default connect(({posts}) => ({posts}))(EventsFeed);