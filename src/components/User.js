import { Routes, Route, Link, useMatch } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';

const User = () => {
  //  useRouteMatch(); // En React Router v6, useRouteMatch fue reemplazado por useMatch y useParams. 
  //Para obtener la funcionalidad similar a useRouteMatch
  let matchList = useMatch('/user/list');
  let matchDetails = useMatch('/user/details');
  let url = matchList ? matchList.pathname : matchDetails ? matchDetails.pathname : '';

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        <li><Link to={`${url}/list`}>User List</Link></li>
        <li><Link to={`${url}/details`}>User Details</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<h3>Please select a user option.</h3>} />
        <Route path="/list" element={<UserList />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default User;
