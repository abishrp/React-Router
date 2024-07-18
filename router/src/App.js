// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contactus from './Components/Contactus';
import User from './Components/User';
import NewBooks from './Components/NewBooks';
import OldBooks from './Components/OldBooks';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/user/1">User1</Link>
            </li>
            <li>
              <Link to="/user/2">User2</Link>
            </li>
            <li>
              <Link to="/books/newbooks">New Book</Link>
            </li>
            <li>
              <Link to="/books/oldbooks">Old Book</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          <Route path='/books'>
            <Route path="newbooks" element={<NewBooks />} />
            <Route path="oldbooks" element={<OldBooks />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
