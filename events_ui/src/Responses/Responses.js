import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

function Response({response}) {
  return (
    <ListGroup.Item>
        {response.user.email}: <b>{response.response}</b>
    </ListGroup.Item>
  );
}

function ResponsesFeed({responses}) {
  // filters out comments that are not meant for this post
  let post_id = localStorage.getItem("post_id");
  let post_responses = responses.filter((resp) => resp.post_id == post_id);

  let list = post_responses.map((resp) => <Response response={resp} key={resp.id}/>);
  return (
    <div>
      <ListGroup variant="flush">
        { list }
      </ListGroup>
    </div>
  );
}


export default connect(({responses}) => ({responses}))(ResponsesFeed);
