import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Link({to, children}) {
  return (
    <Nav.Item>
      <NavLink to={to} exact className="nav-link" activeClassName="active">
        {children}
      </NavLink>
    </Nav.Item>
  );
}

//adds navigation links to the header of each page
export default function Navigation() {
  return (
    <Nav variant="pills">
      <Link to="/">Events</Link>
      <Link to="/users">Users</Link>
    </Nav>
  );
}

//Possibly add events card nav here?
// export default function EventNav() {
//   return (
//     <Nav variant="pills">
//       <Link to="/">Events</Link>
//       <Link to="/users">Users</Link>
//     </Nav>
//   );
// }
