import React from 'react';
// Import the main component of the One Pirate theme
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Adjust the import path as needed
import SignIn from './SignIn';
import SignUp from './SignUp';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Define more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;