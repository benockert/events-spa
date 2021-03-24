import { connect } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';
import capitalize from 'lodash/capitalize';

// 'field' is the key of the form field you are currently updating
function Field({user, setUser, field}) {
  function update_field(ev) {
    let usr_obj = Object.assign({}, user);
    usr_obj[field] = ev.target.value;
    setUser(usr_obj);
  }

  return (
    <Form.Group>
      <Form.Label>{capitalize(field)}</Form.Label>
      <Form.Control type="text" onChange={update_field} value={user[field]||""} />
    </Form.Group>
  );
}

function UserForm({user, setUser}) {
  function onSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(user);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Field user={user} setUser={setUser} field="name" />
      <Field user={user} setUser={setUser} field="email" />
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}

function Users({users, user_form, dispatch}) {
  function setUser(user) {
    dispatch({type: 'user_form/set', data: user});
  }

  let rows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>
        <Button variant="secondary"
                onClick={() => setUser(user)}>
          Edit
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Row>
        <Col>
          <h2>List Users</h2>
          <p>
            <Button variant="secondary"
                    onClick={() => setUser({})}>
              New User
            </Button>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Edit User</h2>
          <UserForm user={user_form} setUser={setUser} />
        </Col>
      </Row>
    </div>
  );
}


export default connect(({users, user_form}) => ({users, user_form}))(Users);
