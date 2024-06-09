 import React from 'react';
// //En React Router v6, debes usar la propiedad Routes y element en lugar de Switch y la prop component. Además,
// // los componentes deben ser pasados como elementos de React utilizando la sintaxis JSX
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

 import Home from './components/Home';
//import Profile from './components/Profile';
 import FormularioCompleto from './components/FormularioCompleto';
 import { FormProvider } from './components/FormContext';
// import Reports from './components/Reports';
// import User from './components/User';
 import './styles.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Navbar, Nav } from 'react-bootstrap';


 const App = () => {
    return (
        <FormProvider>
      <Router>
        <div className="app">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/formularioCompleto">Registrar evento</Nav.Link>
              {/* <Nav.Link as={Link} to="/user">User Management</Nav.Link> */}
            </Nav>
          </Navbar>
          <div className="content mt-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/formularioCompleto" element={<FormularioCompleto />} />
              {/* <Route path="/user" element={<User />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
      </FormProvider>
    );
  }
  
  export default App;
// /* En React Router v6, los componentes deben ser pasados usando la propiedad element con una sintaxis JSX 
// (es decir, element={<Home />} en lugar de element={Home}). */ 
